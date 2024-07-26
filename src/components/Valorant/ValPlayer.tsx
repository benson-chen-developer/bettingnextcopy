import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../Context/store';
import { LolGame, ValorantGame, ValorantPlayer } from '../../Context/PlayerTypes';
import { ClipLoader } from 'react-spinners';
import { Hero } from '../Player/Hero';
// import { Row } from './Row';
import { StatComparator } from '../Player/StatComparator';
import { TableHeader } from '../Player/TableHeader';
import { EverythingLoaded } from '../Player/EverythingLoaded';
import { Row } from '../Player/Row';

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
export const ValPlayer = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {fetchValorantPlayers} = useGlobalContext();
    const [allPlayers, setAllPlayers] = useState<ValorantPlayer[]>([]);
    const [player, setPlayer] = useState<ValorantPlayer | undefined>(undefined);
    const [allGames, setAllGames] = useState<ValorantGame[]>([]);
    const [displayedGames, setDisplayedGames] = useState<ValorantGame[]>([]);
    const [displayedStats, setDisplayedStats] = useState<number[][]>([]);
    
    const [allGamesLoaded, setAllGamesLoaded] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const allPickedBtns = ["All Maps", "Map 1", "Map 2", "Map 3", "Map 1+2"];
    const statsHeader = [
        {name: "K", underName: "Kills"},
        {name: "D", underName: "Deaths"},
        {name: "A", underName: "Assists"},
        {name: "FK", underName: "First Kills"},
        {name: "FD", underName: "First Deaths"},
    ];
    const [chartCompareTo, setChartCompareTo] = useState<number[]>([-1,-1,-1,-1,-1])
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
        // console.log(updatedGames)
        const allGamesFound = updatedGames.every((game: ValorantGame) => game.players.length > 0);
        setAllGamesLoaded(allGamesFound);

        return newGames;
    };

    /*
        The stats are 12 length
            - [0-3] map 1
            - [3-6] are the total/atk/def total (map total for some reason)
            - [6-9] map 2
            - [9-12] map 3

            sets a number[][] (displayStats)
    */
    const compareFunction = (newAllGames: ValorantGame[], foundPlayer: ValorantPlayer) => {
        const addUpMaps = (number: number, game: ValorantGame) => {
            let statsArr: number[] = [];
            let playerStats = game.players.find(p => p.name === foundPlayer.firstName);
            
            statsArr.push(playerStats?.kills[number] as number)
            statsArr.push(playerStats?.deaths[number] as number)
            statsArr.push(playerStats?.assists[number] as number)
            statsArr.push(playerStats?.firstKills[number] as number)
            statsArr.push(playerStats?.firstDeaths[number] as number)
    
            return statsArr;
        }

        let displayStats: number[][] = [];
        if(pickedBtn === 'All Maps') {
            displayStats = newAllGames.map((game) => addUpMaps(3, game))
        } 
        else if(pickedBtn === 'Map 1'){
            displayStats = newAllGames.map((game) => addUpMaps(0, game))
        }
        else if(pickedBtn === 'Map 2'){
            displayStats = newAllGames.map((game) => addUpMaps(6, game))
        }
        else if(pickedBtn === 'Map 3'){
            displayStats = newAllGames.map((game) => addUpMaps(9, game))
        }
        else if (pickedBtn === 'Map 1+2') {
            let first = newAllGames.map((game) => addUpMaps(0, game));
            let second = newAllGames.map((game) => addUpMaps(6, game));
            let combined: number[][] = [];
            
            let i = 0;
            first.forEach((numArr) => {
                combined.push(numArr.map((num, innerI) => num + second[i][innerI]));
                i++;
            })

            displayStats = combined;
        }

        setDisplayedStats(displayStats);
    }

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
            const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/${foundPlayer?.id}/${foundPlayer?.name}`);
            let gamesWithOutMapsOrPlayers = await res.json();

            /* Parse the first map to get that games stats */
            let newGames = await loadMore(gamesWithOutMapsOrPlayers, 5);
            let newAllGames = updatedAllGames(gamesWithOutMapsOrPlayers, newGames).slice(0,25);
            
            compareFunction(newAllGames, foundPlayer!); /* Intially will set the total kda for all maps 1-3 */
            setAllGames(newAllGames);
            setDisplayedGames(newGames)
            setLoading(false);
        }

        if(paramLeague && paramPlayer) fetchPlayer();
    }, [])

    useEffect(() => {
        compareFunction(allGames, player!);
    }, [pickedBtn])

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

                        <StatComparator chartCompareTo={chartCompareTo} setChartCompareTo={setChartCompareTo} />

                        {/* Stats Header */}
                        <TableHeader statsHeader={statsHeader} />
                    </thead>
                    <tbody>
                        {displayedGames.map((game, index) => {
                            return (
                                <Row 
                                    key={index}
                                    pickedBtn={pickedBtn}
                                    chartCompareTo={chartCompareTo}
                                    displayedStats={displayedStats[index]}
                                    team={game.oppTeam}
                                    date={game.date}
                                />
                            );
                        })}
                    </tbody>
                </table>

                <EverythingLoaded 
                    allLoaded={allGamesLoaded}
                    onClickFunction={() => {
                        const loadGames = async () => {
                            const newGames = await loadMore(allGames, 5);
                            setDisplayedGames(p => [...p, ...newGames]);
                            setAllGames(p => updatedAllGames(p, newGames))
                            setLoading(false);
                        };
                
                        setLoading(true);
                        loadGames();
                    }}
                />
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
