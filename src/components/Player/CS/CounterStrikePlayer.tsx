import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../../Context/store';
import { StatComparator } from '../StatComparator';
import { Hero } from '../Hero';
import { EverythingLoaded } from '../EverythingLoaded';
import { TableHeader } from '../TableHeader';
import { CSPlayer, LolGame, LolPlayer } from '../../../Context/PlayerTypes';
import { Row } from '../Row';
import { NotFound } from '../NotFound';

export type StatCompartorLeague = {
    kills: number, 
    deaths: number,
    assists: number,
}

/*

*/
export const CounterStrikePlayer = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {fetchCSPlayers} = useGlobalContext();
    const [allPlayers, setAllPlayers] = useState<CSPlayer[]>([]);
    const [player, setPlayer] = useState<CSPlayer | undefined>(undefined);

    const [allGames, setAllGames] = useState<LolGame[]>([]);
    const [displayedRows, setDisplayedRows] = useState<LolGame[]>([]);
    
    const [allGamesLoaded, setAllGamesLoaded] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    const allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2"];
    const statsHeader = [
        {name: "K", underName: "Kills"},
        {name: "HS", underName: "Headshots"},
        {name: "D", underName: "Deaths"},
        {name: "A", underName: "Assists"},
    ];
    const [chartCompareTo, setChartCompareTo] = useState<number[]>([-1, -1, -1,])
    const [pickedBtn, setPickedBtn] = useState<string>('All Maps')

    /*
        We loop through games and find the same name team two times in a row
        (best way I can get the team name)
    */
    const setTeamForPlayer = (player: LolPlayer, games: LolGame[]): LolPlayer => {
        let previousTeams: [string, string] | null = null;
        let teamCounts: { [team: string]: number } = {};
    
        games.forEach(game => {
            const [teamOne, , teamTwo] = game.game.split(" ");
            
            if (previousTeams && previousTeams[0] === teamOne && previousTeams[1] === teamTwo) {
                // Skip if the teams are the same as the previous teams
                return;
            }
    
            previousTeams = [teamOne, teamTwo];
            if (!teamCounts[teamOne]) teamCounts[teamOne] = 0;
            if (!teamCounts[teamTwo]) teamCounts[teamTwo] = 0;
            teamCounts[teamOne]++;
            teamCounts[teamTwo]++;
        });
    
        const commonTeam = Object.keys(teamCounts).reduce((a, b) => teamCounts[a] > teamCounts[b] ? a : b);
    
        player.team = commonTeam;
    
        return player;
    };

    /*
        Goes through the game's scores
            - Which is in the format ['3/3/3', '1/1/1']
            - Adds up the maps needed (so all maps is '4/4/4')
            - returns displayedRows which is the same game but with only one item in scores field
    */
    const compareFunction = (pickedBtn: string, allTheGames: LolGame[]): LolGame[] => {
        /* This takes the strings '3/3/3' and adds up the columns */
        const addUpMaps = (...maps: string[]): string[] => {
            const sums = [0, 0, 0];
        
            maps.forEach(map => {
                const parts = map.split('/').map(Number);
                for (let i = 0; i < parts.length; i++) {
                    sums[i] += parts[i];
                }
            });
        
            return [sums.join('/')];
        };

        let displayGames: LolGame[] = [];

        if(pickedBtn === "All Maps"){
            displayGames = allTheGames.map(game => {
                return { ...game, scores: addUpMaps(...game.scores) }
            })
        }
        else if(pickedBtn === "Map 1"){
            displayGames = allTheGames.map(game => {
                return { ...game, scores: addUpMaps(game.scores[0]) }
            })
        }
        else if(pickedBtn === "Map 2"){
            displayGames = allTheGames.map(game => {
                return { ...game, scores: addUpMaps(game.scores[1]) }
            })
        }
        else if(pickedBtn === "Map 3"){
            displayGames = allTheGames.map(game => {
                return { ...game, scores: addUpMaps(game.scores[3] ? game.scores[3] : '0/0/0') }
            })
        }
        else if(pickedBtn === "Map 1+2"){
            displayGames = allTheGames.map(game => {
                return { ...game, scores: addUpMaps(...game.scores.slice(0,2)) }
            })
        }

        return displayGames;
    }

    useEffect(() => {
        const fetchPlayer = async () => {
            const allPlayers = await fetchLolPlayers();
            setAllPlayers(allPlayers);
        
            const foundPlayer = allPlayers.find(player => player.firstName.toLowerCase() === (paramPlayer as string).toLowerCase());

            if(foundPlayer){
                const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/lol/player/${foundPlayer.id}`)
                const allGames = await res.json();

                let updatedPlayer = setTeamForPlayer(foundPlayer, allGames);
                setPlayer(updatedPlayer);
                setAllGames(allGames);
                setDisplayedRows(compareFunction('All Maps', allGames));
            }

            setLoading(false);
        }

        if(paramLeague && paramPlayer) fetchPlayer();
    }, [])

    useEffect(() => {
        setDisplayedRows(compareFunction(pickedBtn, allGames));
    }, [pickedBtn, setPickedBtn])

    if(!loading && player) return (
        <div>
            <Hero 
                playerName={player?.firstName as string}
                picUrl=""
                team={player?.team as string}
                number=""
                position=''
                pickedBtn={pickedBtn}
                setPickedBtn={setPickedBtn}
                allPickedBtns={allPickedBtns}
            />

            <h1 style={{ marginLeft: '75px', marginBottom:'10px'}}>Games</h1>

            <div style={{display:'flex', marginLeft:'50px',flexDirection:'column', width:'100%'}}>
                <table style={{ width: '50%', borderCollapse: "collapse"}}>
                    <thead>

                        <StatComparator chartCompareTo={chartCompareTo} setChartCompareTo={setChartCompareTo} />

                        <TableHeader statsHeader={statsHeader} />
                    </thead>
                    <tbody>
                        {displayedRows.map((game, index) => (
                            <Row 
                                key={index} 
                                chartCompareTo={chartCompareTo} 
                                displayedStats={game.scores[0].split('/').map(strNum => parseInt(strNum))}
                                pickedBtn={pickedBtn} 
                                team={
                                    game.game.split(" ")[0] !== player?.team ? 
                                    game.game.split(" ")[0] : game.game.split(" ")[2]
                                }
                                date={game.date}
                            />
                        ))}
                    </tbody>
                </table>

                <EverythingLoaded 
                    allLoaded={allGamesLoaded}
                    onClickFunction={() => {
                        const loadGames = async () => {
                        };
                
                        setLoading(true);
                        loadGames();
                    }}
                />
            </div>

        </div>
    )

    if(!loading && !player) return(
        <NotFound />
    )

    return <div style={{
        width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center',
        display:'flex'
    }}>
        <ClipLoader
            color={'#000'}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
}
