import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../Context/store';
import { ValorantGame, ValorantPlayer } from '../../Context/PlayerTypes';
import { ClipLoader } from 'react-spinners';
import { Hero } from '../Player/Hero';
import { Row } from './Row';
import { StatCompartor } from '../Player/StatCompartor';

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
export const ValPlayer = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {fetchValorantPlayers} = useGlobalContext();
    const [allPlayers, setAllPlayers] = useState<ValorantPlayer[]>([]);
    const [player, setPlayer] = useState<ValorantPlayer | undefined>(undefined);
    const [allGames, setAllGames] = useState<ValorantGame[]>([]);
    const [displayedGames, setDisplayedGames] = useState<ValorantGame[]>([]);

    const allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2", "Map 1+3", "Map 2+3"];
    const statsHeader = ["K", "D", "A"];
    const [chartCompareTo, setChartCompareTo] = useState<{kills: number, deaths: number, assists: number}>({
        "kills": -1, "deaths": -1, "assists": -1
    })
    const [pickedBtn, setPickedBtn] = useState<string>('All Maps')

    /*
        If (`http://localhost:3001/valorant/${foundPlayer?.id}/${foundPlayer?.name}`); crashes it means ussually that
        foundPlayer isn't defined (make sure nodemon crashing restarts)
    */
    useEffect(() => {
        const fetchPlayer = async () => {
            const allValPlayers = await fetchValorantPlayers();
            // console.log(allValPlayers)
            setAllPlayers(allValPlayers);

            const foundPlayer = allValPlayers.find(player => player.name.toLowerCase() === (paramPlayer as string).toLowerCase());
            setPlayer(foundPlayer);
            // console.log(foundPlayer)

            const res = await fetch(`http://localhost:3001/valorant/${foundPlayer?.id}/${foundPlayer?.name}`);
            let gamesWithOutMapsOrPlayers = await res.json();

            const mapRes = await fetch(`http://localhost:3001/valorant/123`);
            const playersAndMaps = await mapRes.json();

            const players = playersAndMaps.players; const maps = playersAndMaps.maps;
            gamesWithOutMapsOrPlayers[0].players = players; gamesWithOutMapsOrPlayers[0].maps = maps;

            // console.log(gamesWithOutMapsOrPlayers)
            setAllGames(gamesWithOutMapsOrPlayers);
            setDisplayedGames(gamesWithOutMapsOrPlayers.filter((game: ValorantGame) => 
                game.maps.length > 0 && game.players.length > 0)
            )
        }

        if(paramLeague && paramPlayer) fetchPlayer();
    }, [])

    if(player && allPlayers.length > 0 && displayedGames.length > 0) return (
        <div>
            <Hero 
                playerName={player.name}
                picUrl=""
                team={player.team}
                number=""
                position=''
                pickedBtn={pickedBtn}
                setPickedBtn={setPickedBtn}
                allPickedBtns={allPickedBtns}
            />

            <div style={{display:'flex', marginLeft:'50px'}}>
                <table style={{ width: '50%', borderCollapse: "collapse"}}>
                    <thead>

                        <StatCompartor chartCompareTo={chartCompareTo} setChartCompareTo={setChartCompareTo} />

                        {/* Stats Header */}
                        <tr style={{ display: 'flex' }}>
                            <th style={{ width: '200px' }}>Team</th>
                            {statsHeader.map((value, index) => (
                                <th style={{ width: '50px' }} key={index}>
                                    {value}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {displayedGames.map((game, index) => (
                            <Row key={index} chartCompareTo={chartCompareTo} game={game} playerName={player.name} pickedBtn={pickedBtn}/>
                        ))}
                    </tbody>
                </table>
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
