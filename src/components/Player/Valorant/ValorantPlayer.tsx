import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../../Context/store';
import { ValorantGame, ValorantPlayer } from '../../../Context/PlayerTypes';
import { Hero } from '../Hero';
import { Row } from '../Row';
import { StatComparator } from '../StatComparator';
import { TableHeader } from '../TableHeader';

export type StatCompartorValorant = {
    kills: number, 
    deaths: number,
    assists: number,
    firstKills: number,
    firstDeaths: number,
    // headshots: number
}

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
export const ValPlayerPage = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {fetchValorantPlayers} = useGlobalContext();
    const [player, setPlayer] = useState<ValorantPlayer | undefined>(undefined);
    const [allGames, setAllGames] = useState<ValorantGame[]>([]);
    const [displayedStats, setDisplayedStats] = useState<number[][]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2"];
    const statsHeader = [
        {name: "K", underName: "Kills"},
        {name: "D", underName: "Deaths"},
        {name: "A", underName: "Assists"},
        {name: "FK", underName: "First Kills"},
        {name: "FD", underName: "First Deaths"},
    ];
    const [chartCompareTo, setChartCompareTo] = useState<number[]>(Array(statsHeader.length).fill(-1))
    const [pickedBtn, setPickedBtn] = useState<string>(allPickedBtns[0])

    const compareFunction = (newAllGames: ValorantGame[], foundPlayer: ValorantPlayer): number[][] => {
        const addUpMaps = (pickedNumbers: number[], game: ValorantGame) => {
            let statsArr: number[] = Array(statsHeader.length).fill(0);

            /* Scenrio in which we pick map 3 but there was no played map 3 */
            if(pickedNumbers.length === 1 && pickedNumbers[0] === 2 && !game.maps[2].didPlay){
                return Array(statsHeader.length).fill(-1);
            } 

            pickedNumbers.forEach(number => {
                let map = game.maps[number];

                if(map.didPlay){
                    let playerStats = map.players.find(p => p.name === foundPlayer.firstName)
                    statsArr[0] += Number(playerStats!.kills)
                    statsArr[1] += Number(playerStats!.deaths)
                    statsArr[2] += Number(playerStats!.assists)
                    statsArr[3] += Number(playerStats!.firstKills)
                    statsArr[4] += Number(playerStats!.firstDeaths)
                } 
            })

            return statsArr;
        }

        let displayStats: number[][] = [];
        if(pickedBtn === 'All Maps') {
            displayStats = newAllGames.map((game) => addUpMaps([0,1,2], game))
        } 
        else if(pickedBtn === 'Map 1'){
            displayStats = newAllGames.map((game) => addUpMaps([0], game))
        }
        else if(pickedBtn === 'Map 2'){
            displayStats = newAllGames.map((game) => addUpMaps([1], game))
        }
        else if(pickedBtn === 'Map 3'){
            displayStats = newAllGames.map((game) => addUpMaps([2], game))
        }
        else if (pickedBtn === 'Map 1+2') {
            displayStats = newAllGames.map((game) => addUpMaps([0,1], game));
        }

        return displayStats;
    }

    useEffect(() => {
        const fetchPlayer = async () => {
            const allValPlayers = await fetchValorantPlayers();

            /* Found the player in the load all players array */
            const foundPlayer = allValPlayers.find(player => player.firstName.toLowerCase() === (paramPlayer as string).toLowerCase());
            setPlayer(foundPlayer);

            /* Get the Matches */
            // const matchRes = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/dummy/games`, {
            //     method: 'POST', 
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({urls: ["111"]}) 
            // });
            const matchRes = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/games`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({team: foundPlayer?.team}) 
            });
            console.log(matchRes)
            let games = await matchRes.json();
            setAllGames(games);

            setDisplayedStats(compareFunction(games, foundPlayer!));
            setLoading(false);
        }

        if(paramLeague && paramPlayer) fetchPlayer();
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

            <p className="playerPageGamesHeader">Games</p>

            <div className='playerPageStatTableContainer'>
                <table className='playerPageStatTable'>
                    <thead>
                        <StatComparator chartCompareTo={chartCompareTo} setChartCompareTo={setChartCompareTo} />
                        <TableHeader statsHeader={statsHeader} />
                    </thead>
                    <tbody>
                        {allGames.map((game, index) => {
                            return (
                                <Row 
                                    key={index}
                                    pickedBtn={pickedBtn}
                                    chartCompareTo={chartCompareTo}
                                    displayedStats={displayedStats[index]}
                                    team={game.team1 === player?.team ? game.team2 : game.team1}
                                    date={game.date}
                                />
                            );
                        })}
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
