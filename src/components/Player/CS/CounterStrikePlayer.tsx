import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../../Context/store';
import { StatComparator } from '../StatComparator';
import { Hero } from '../Hero';
import { EverythingLoaded } from '../EverythingLoaded';
import { TableHeader } from '../TableHeader';
import { CSPlayer, CSGame } from '../../../Context/PlayerTypes';
import { Row } from '../Row';
import { NotFound } from '../NotFound';

export const CounterStrikePlayer = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {fetchCSPlayers} = useGlobalContext();
    const [allPlayers, setAllPlayers] = useState<CSPlayer[]>([]);
    const [player, setPlayer] = useState<CSPlayer | undefined>(undefined);

    const [allGames, setAllGames] = useState<CSGame[]>([]);
    const [displayedRows, setDisplayedRows] = useState<number[][]>([]);
    
    const [allGamesLoaded, setAllGamesLoaded] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    const allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2"];
    const statsHeader = [
        {name: "K", underName: "Kills"},
        {name: "HS", underName: "Headshots"},
        {name: "D", underName: "Deaths"},
        {name: "A", underName: "Assists"},
    ];
    const [chartCompareTo, setChartCompareTo] = useState<number[]>(Array(statsHeader.length).fill(-1)); 
    const [pickedBtn, setPickedBtn] = useState<string>('All Maps')

    const compareFunction = (pickedBtn: string, allTheGames: CSGame[]): number[][] => {
        /* 
            Pass all the map indexes we wanna add up (Example)
                - [1] means get map 1
                - [1, 2] means maps 1+2
        */
        const addUpMaps = (mapIndexes: number[]): number[][] => {
            let ret: number[][] = [];
            
            allTheGames.forEach(game => {
                let intial: number[] = Array(statsHeader.length).fill(0);
                let skipThisGame = false;

                for(let i=0; i<mapIndexes.length; i++){
                    const mapIndex = mapIndexes[i];

                    /* This means this map was never played */
                    if(mapIndex > game.maps.length - 1 || game.maps[mapIndex] === undefined) {
                        intial = Array(statsHeader.length).fill(-1);
                    } else {
                        const players = game.maps[mapIndex].players;

                        if(players){
                            const boxScore = players.find(p => p.name.toLowerCase() === (paramPlayer as string).toLowerCase());
                            
                            if(boxScore){
                                intial[0] += parseFloat(boxScore!.kills);
                                intial[1] += parseFloat(boxScore!.headshots);
                                intial[2] += parseFloat(boxScore!.deaths);
                                intial[3] += parseFloat(boxScore!.assists);
                            } else {
                                /* This game needs to be removed (player prob was subbed) */
                                setAllGames(prevGames => prevGames.filter(pGame => pGame.url !== game.url));
                                skipThisGame = true;
                            }
                        }
                    }
                }

                if(!skipThisGame) ret.push(intial);
            })

            return ret;
        };

        let displayedRows: number[][] = [];
        if(pickedBtn === "All Maps") displayedRows = addUpMaps([0,1,2])
        else if(pickedBtn === "Map 1") displayedRows = addUpMaps([0])
        else if(pickedBtn === "Map 2") displayedRows = addUpMaps([1])
        else if(pickedBtn === "Map 3") displayedRows = addUpMaps([2])
        else if(pickedBtn === "Map 1+2") displayedRows = addUpMaps([0,1])

        return displayedRows;
    }

    useEffect(() => {
        const fetchPlayer = async () => {
            const allPlayers = await fetchCSPlayers();
            setAllPlayers(allPlayers);
            const foundPlayer = allPlayers.find(player => player.firstName.toLowerCase() === (paramPlayer as string).toLowerCase());
            if(foundPlayer){
                setPlayer(foundPlayer);
                const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/cs/matches`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({team: foundPlayer.team})
                });
                const allGames = await res.json();
                const sortedGames = allGames.sort((a: { date: string }, b: { date: string }) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                });

                console.log(sortedGames)
                setAllGames(sortedGames);
                setDisplayedRows(compareFunction('All Maps', sortedGames));
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
                team={player?.team}
                number=""
                position=''
                pickedBtn={pickedBtn}
                setPickedBtn={setPickedBtn}
                allPickedBtns={allPickedBtns}
            />

            <h1 style={{ marginLeft: '75px', marginBottom:'10px'}}>Games</h1>

            <div style={{display:'flex', marginLeft:'50px',flexDirection:'column', width:'100%', minHeight:'150px'}}>
                <table style={{ width: '50%', borderCollapse: "collapse"}}>
                    <thead>
                        <StatComparator chartCompareTo={chartCompareTo} setChartCompareTo={setChartCompareTo} />

                        <TableHeader statsHeader={statsHeader} />
                    </thead>
                    <tbody>
                        {displayedRows.map((row, index) => {
                            const formattedDate = new Date(allGames[index].date).toLocaleDateString("en-US", {
                                year: "2-digit",
                                month: "numeric",
                                day: "numeric",
                            });

                            return (
                                <Row 
                                    key={index} 
                                    chartCompareTo={chartCompareTo} 
                                    displayedStats={row}
                                    pickedBtn={pickedBtn} 
                                    team={player.team === allGames[index].team1 ? allGames[index].team2.slice(0,4) : allGames[index].team1.slice(0,4)}
                                    date={formattedDate} 
                                    extraText={allGames[index].maps.length === 1 ? 'DNP (Best of 1)' : 'DNP (Best of 3)'}
                                />
                            );
                        })}
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
