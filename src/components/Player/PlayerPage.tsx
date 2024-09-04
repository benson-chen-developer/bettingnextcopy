import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { PlayerType, ValorantGame, ValorantPlayer } from './../../Context/PlayerTypes';
import { Hero } from './Hero';
import { Row } from './Row';
import { StatComparator } from './StatComparator';
import { TableHeader } from './TableHeader';

/*
    For this page the games array is like this 

    date: "2024/07/14"
    maps : (3) ['Ascent', 'Bind', 'Lotus']
    oppTeam : "LOUD"
    players : Array(10) {name: 'saadhak', team: 'LOUD', kills: Array(12), deaths: Array(12), assists: Array(12)}
    url: "/353200/loud-vs-100-thieves-champions-to"

    1) We load 50 of these games but the maps and players will be empty
    2) We load each map indivually via the url and fill the maps and players
    3) Only load <Rows> for games without an empty players and maps array 
*/
type Props = {
    fetchPlayer: () => Promise<PlayerType>;
    fetchGames: () => Promise<any[]>;
    compareFunction: (arg1: any, arg2: PlayerType) => number[][];
    allPickedBtns: string[];
    statsHeader: {name: string , underName: string}[]
}

export const ValPlayerPage: React.FC<Props> = ({
    fetchPlayer, fetchGames, compareFunction,
    allPickedBtns, statsHeader
}) => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const [player, setPlayer] = useState<PlayerType | undefined>(undefined);
    const [allGames, setAllGames] = useState<any[]>([]);
    const [displayedStats, setDisplayedStats] = useState<number[][]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [chartCompareTo, setChartCompareTo] = useState<number[]>(Array(statsHeader.length).fill(-1))
    const [pickedBtn, setPickedBtn] = useState<string>(allPickedBtns[0])

    useEffect(() => {
        const intialize = async () => {
            const foundPlayer = await fetchPlayer();
            const foundGames = await fetchGames();

            if(foundPlayer && foundGames){
                setPlayer(foundPlayer);
                setAllGames(foundGames);
            }
        };
    
        if(paramLeague && paramPlayer) intialize();
    }, [])

    useEffect(() => {
        setDisplayedStats(compareFunction(allGames, player!));
    }, [pickedBtn])

    if(!loading) return (
        <div>
            <Hero 
                playerName={player!.firstName}
                picUrl=""
                team={player!.team}
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
                        {/* <StatComparator chartCompareTo={chartCompareTo} setChartCompareTo={setChartCompareTo} /> */}
                        {/* <TableHeader statsHeader={statsHeader} /> */}
                    </thead>
                    <tbody>
                        {/* {allGames.map((game, index) => {
                            return (
                                <Row 
                                    key={index}
                                    chartCompareTo={chartCompareTo}
                                    displayedStats={displayedStats[index]}
                                    team={game.team1 === player?.team ? game.team2 : game.team1}
                                    date={game.date}
                                />
                            );
                        })} */}
                    </tbody>
                </table>

                <div style={{marginBottom: '50px'}}></div>        
            </div>

        </div>
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
