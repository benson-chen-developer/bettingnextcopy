import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../Context/store';
import { ValorantGame, ValorantPlayer } from '../../Context/PlayerTypes';
import { ClipLoader } from 'react-spinners';
import { Hero } from '../Player/Hero';
import { Row } from './Row';

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
    const [pickedBtn, setPickedBtn] = useState<string>('All Maps')

    useEffect(() => {
        const fetchPlayer = async () => {
            const allValPlayers = await fetchValorantPlayers();
            setAllPlayers(allValPlayers);

            const foundPlayer = allValPlayers.find(player => player.name.toLowerCase() === (paramPlayer as string).toLowerCase());
            setPlayer(foundPlayer);

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
                        {/* <tr style={{ display: 'flex', marginBottom:'20px', alignItems:'center' }}>
                            <th style={{ width: '200px', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="#666363" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z" />
                                </svg>
                                <p style={{color:'#666363', fontSize:'12px', margin:0}}>
                                    Type a Number 
                                    <br /> to Compare to Stats
                                </p>
                            </th>

                            {Object.entries(chartCompareTo).map(([key, value]) => (
                                <td key={key} style={{ width: '50px', height: '35px' }}>
                                    <input
                                        style={{
                                            width: '90%',
                                            height: '100%',
                                            border: '1px solid #000',
                                            borderRadius: 5,
                                            textAlign: 'center',
                                            fontSize: '16px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        type="number"
                                        onChange={(e) => handleCompareToChange(key, Number(e.target.value))}
                                        value={value}
                                    />
                                </td>
                            ))}
                        </tr> */}

                        {/* <tr style={{ display: 'flex' }}>
                            <th style={{ width: '200px' }}>Team</th>
                            {Object.entries(chartCompareTo).map(([key, value]) => (
                                <th style={{ width: '50px' }} key={key}>
                                    {key}
                                </th>
                            ))}
                        </tr> */}
                    </thead>
                    <tbody>
                        {displayedGames.map((game, index) => (
                            <Row key={index} game={game} playerName={player.name} pickedBtn={pickedBtn}/>
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
