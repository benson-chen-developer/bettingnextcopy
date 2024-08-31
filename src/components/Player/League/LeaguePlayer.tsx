import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../../Context/store';
import { StatComparator } from '../StatComparator';
import { Hero } from '../Hero';
import { EverythingLoaded } from '../EverythingLoaded';
import { TableHeader } from '../TableHeader';
import { LolGame, LolPlayer } from '../../../Context/PlayerTypes';
import { Row } from '../Row';
import { NotFound } from '../NotFound';

export type StatCompartorLeague = {
    kills: number, 
    deaths: number,
    assists: number,
}

/*

*/
export const LeaguePlayer = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {fetchLolPlayers} = useGlobalContext();
    const [allPlayers, setAllPlayers] = useState<LolPlayer[]>([]);
    const [player, setPlayer] = useState<LolPlayer | undefined>(undefined);

    const [allGames, setAllGames] = useState<LolGame[]>([]);
    const [displayedRows, setDisplayedRows] = useState<LolGame[]>([]);
    
    const [allGamesLoaded, setAllGamesLoaded] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    const allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2"];
    const statsHeader = [
        {name: "K", underName: "Kills"},
        {name: "D", underName: "Deaths"},
        {name: "A", underName: "Assists"},
    ];
    const [compareTo, setCompareTo] = useState<string[]>(Array(statsHeader.length).fill(""))
    const [pickedBtn, setPickedBtn] = useState<string>('All Maps')

    /* Check first 2 games and return the 2 names in common between both games */
    const GetTeamName = (games: LolGame[]): string => {
        let firstGame = games[0]; let secondGame = games[1];
        let names: string[] = [];

        if(firstGame && secondGame){
            names = [
                firstGame.game.split(' ')[0], firstGame.game.split(' ')[2], 
                secondGame.game.split(' ')[0], secondGame.game.split(' ')[2]
            ]
        }

        for (let i = 0; i < names.length; i++) {
            for (let j = i + 1; j < names.length; j++) {
                if (names[i].toLocaleLowerCase() === names[j].toLocaleLowerCase()) {
                    return names[i];
                }
            }
        }
        return ''; 
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
                return { ...game, scores: addUpMaps(game.scores[2] ? game.scores[2] : '-1/-1/-1') }
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
        
            let foundPlayer = allPlayers.find(player => player.firstName.toLowerCase() === (paramPlayer as string).toLowerCase());

            if(foundPlayer){
                const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/lol/player/${foundPlayer.id}`)
                const allGames = await res.json();

                let team = GetTeamName(allGames);
                if(team) foundPlayer.team = team;
                setPlayer(foundPlayer);
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
                        <StatComparator compareTo={compareTo} setCompareTo={setCompareTo} />
                        <TableHeader statsHeader={statsHeader} />
                    </thead>
                    <tbody>
                        {displayedRows.map((game, index) => (
                            <Row 
                                key={index} 
                                compareTo={compareTo}
                                displayedStats={game.scores[0].split('/').map(strNum => parseInt(strNum))}
                                team={
                                    game.game.split(" ")[0].toLocaleLowerCase() !== player?.team.toLocaleLowerCase() ? 
                                    game.game.split(" ")[0] : game.game.split(" ")[2]
                                }
                                date={game.date}
                                extraText={allGames[index].scores.length === 1 ? 'DNP (Best of 1)' : 'DNP (Best of 3)'}
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
