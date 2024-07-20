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
    
    const [allGamesLoaded, setAllGamesLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2", "Map 1+3", "Map 2+3"];
    const statsHeader = ["K", "D", "A"];
    const [chartCompareTo, setChartCompareTo] = useState<{kills: number, deaths: number, assists: number}>({
        "kills": -1, "deaths": -1, "assists": -1
    })
    const [pickedBtn, setPickedBtn] = useState<string>('All Maps')

    /* Utility function to remove the non updated maps/players in allGames with updated ones */
    const updatedAllGames = (allGames: ValorantGame[], newGames: ValorantGame[]): ValorantGame[] => {
        return allGames.map(game => {
            const updatedGame = newGames.find(newGame => newGame.url === game.url);
            return updatedGame ? updatedGame : game;
        })
    };

    /* 
        We loop through each game and each one with an empty map and player needs data so we fill it 
            - Returns only the new games and not old ones (make sure to append to displayedGames current state)
            - Make sure to upadte the allGames to have the maps and players updated with this info
            - Will also check if all 50 games are loaded
    */
    const loadMore = async (allGames: ValorantGame[], loadThisMuch: number): Promise<ValorantGame[]> => {
        let newGames: ValorantGame[] = [];
        let loadIndex = 0;
    
        for (const game of allGames) {
            if (game.maps.length === 0 && game.players.length === 0 && loadIndex < loadThisMuch) {
                try {
                    const mapRes = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/game`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'url': game.url
                        }
                    });
                    const playersAndMaps = await mapRes.json();
                    const players = playersAndMaps.players;
                    const maps = playersAndMaps.maps;
    
                    newGames.push({
                        ...game, maps: maps, players: players
                    });
                    loadIndex++;
                } catch (error) {
                    console.error(`Error fetching data for game at ${game.url}:`, error);
                }
            }
        }
    
        /* Check to see if every game is loaded */
        const updatedGames = updatedAllGames(allGames, newGames);
        console.log(updatedGames)
        const allGamesFound = updatedGames.every((game: ValorantGame) => game.players.length > 0);
        setAllGamesLoaded(allGamesFound);

        return newGames;
    };

    /*
        If (`/${foundPlayer?.id}/${foundPlayer?.name}`); crashes it means ussually that
        foundPlayer isn't defined (make sure nodemon crashing restarts)
    */
    useEffect(() => {
        const fetchPlayer = async () => {
            const allValPlayers = await fetchValorantPlayers();
            setAllPlayers(allValPlayers);

            /* Found the player in the load all players array */
            const foundPlayer = allValPlayers.find(player => player.name.toLowerCase() === (paramPlayer as string).toLowerCase());
            setPlayer(foundPlayer);

            /* Get the maps from the player */
            const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/${foundPlayer?.id}/${foundPlayer?.name}`);
            let gamesWithOutMapsOrPlayers = await res.json();

            /* Parse the first map to get that games stats */
            let newGames = await loadMore(gamesWithOutMapsOrPlayers, 5);

            setAllGames(updatedAllGames(gamesWithOutMapsOrPlayers, newGames).slice(0,25));
            setDisplayedGames(newGames)
            setLoading(false);
        }

        if(paramLeague && paramPlayer) fetchPlayer();
    }, [])

    if(!loading && player && allPlayers.length > 0 && displayedGames.length > 0) return (
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

            <h1 style={{ marginLeft: '75px', marginBottom:'10px'}}>Games</h1>

            <div style={{display:'flex', marginLeft:'50px',flexDirection:'column', width:'100%'}}>
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

                {allGamesLoaded ?
                    <div style={{ width: '70%', display: 'flex', justifyContent:'center', marginTop:'25px' }}>
                        <p style={{color: '#000', fontSize:12, fontWeight:'bold'}}>
                            Everything is Loaded
                        </p>
                    </div>
                        :
                    <div style={{ width: '70%', display: 'flex', justifyContent:'center', marginTop:'25px' }}>
                        <button 
                             onClick={() => {
                                const loadGames = async () => {
                                    const newGames = await loadMore(allGames, 5);
                                    setDisplayedGames(p => [...p, ...newGames]);
                                    setAllGames(p => updatedAllGames(p, newGames))
                                    setLoading(false);
                                };
                        
                                setLoading(true);
                                loadGames();
                            }} 
                            style={{
                                width: 100, height:40, borderRadius: 50,
                                background: '#D9D9D9',
                                border: '1px solid #000',
                                display:'flex', justifyContent:'center', alignItems:'center',
                                cursor:'pointer', marginBottom:'50px'
                            }}
                        >
                            <p style={{color: '#000', fontSize:12, fontWeight:'bold'}}>
                                Load More
                            </p>
                        </button>
                    </div>
                }
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
