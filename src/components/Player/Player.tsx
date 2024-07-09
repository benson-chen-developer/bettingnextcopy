import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { fillStats, Game, Game2, Stats } from '../../functions/players';
import { Row } from './Row';
import { useParams } from 'react-router-dom';
import { Hero } from './Hero/Hero';
import { betterLoadGames, gameLinks, loadGames } from '../../data/data';
import { ClipLoader } from 'react-spinners';

interface Props{
    allGames: Game[]
    setAllGames:  Dispatch<SetStateAction<Game[]>>
    allGamesLoaded: {league: string, loaded: boolean}[]
    setAllGamesLoaded: Dispatch<SetStateAction<{league: string, loaded: boolean}[]>>
    useLocalStorage: any
}

export const Player: React.FC<Props> = ({allGames, allGamesLoaded, setAllGames, setAllGamesLoaded, useLocalStorage}) => {
    const { paramName, paramLeague } = useParams<{ paramName: string, paramLeague:string }>();
    const parsedParamName = `${paramName?.split("_")[0]}. ${paramName?.split("_")[1]}`
    const [localStorageValue, setLocalStorageValue] = useLocalStorage('loadedGames', '');

    const [games, setGames] = useState<Game[]>([]);
    const [gamesWithPlayer, setGamesWithPlayer] = useState<Game2[]>([]);
    const [chartCompareTo, setChartCompareTo] = useState<Stats>({
        "PTS": -1, "REB": -1, "AST":-1,
        "STL": -1, "BLK": -1, "TO": -1,
        "FGM":  -1, "FGA": -1,
        "3PM": -1, "3PA": -1, 
        "FTM": -1, "FTA": -1,
        "FAN": -1
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [dateLoadedTo, setDateLoadedTo] = useState<Date>(new Date());
    //'May 3, 2024'

    const fastForwardDays = (oldDate: Date, days: number): Date => {
        const newDate = new Date(oldDate);
        newDate.setDate(newDate.getDate() + days);

        if(newDate >= new Date()){
            return new Date();
        } else if (newDate < new Date("May 3, 2024")) { //Start of WNBA Season
            return new Date("May 3, 2024");
        }

        return newDate;
    }

    useEffect(() => {
        const fetchGames = async () => {
            const games = await betterLoadGames('WNBA', fastForwardDays(dateLoadedTo, -14), dateLoadedTo, parsedParamName);
            let sortedGames = games.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            setDateLoadedTo(fastForwardDays(dateLoadedTo, -14));

            // console.log(sortedGames)
            setGamesWithPlayer(sortedGames);
            setIsLoading(false);
        };
        
        setIsLoading(true);
        if(paramName) fetchGames();
    }, [paramName])

    const loadMoreTwo = async (): Promise<void> => {
        setIsLoading(true);
        const newGames = await betterLoadGames('WNBA', fastForwardDays(dateLoadedTo, -14), dateLoadedTo, parsedParamName);
        let sortedGames = [...gamesWithPlayer, ...newGames].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setGamesWithPlayer(sortedGames);
        setDateLoadedTo(fastForwardDays(dateLoadedTo, -14));
        setIsLoading(false);
    }

    const handleCompareToChange = (key: string, value: number) => {
        if(value <= -1) value = -1;
        setChartCompareTo(prevState => ({
          ...prevState,
          [key]: value
        }));
    };

    const loadMore = async (): Promise<void> => {
        const gameIdsLen = gameLinks.find(g => g.name === paramLeague)!.gameIds.length;
        const ret = await loadGames(paramLeague!, gameIdsLen-1, gameIdsLen)
        setAllGamesLoaded(prevState =>
            prevState.map(e =>
                e.league === paramLeague ? { ...e, loaded: true } : e
            )
        );
        let newAllGames = [...allGames, ...ret];
        // let newLocalCache = JSON.parse(localStorageValue);
        // newLocalCache.map((element: any) => {
        //     if(element.league === paramLeague){
        //         return element.games = newAllGames;   //Caching code
        //     } else {
        //         return element;
        //     }
        // });

        // console.log(newLocalCache)
        // setLocalStorageValue(JSON.stringify(newLocalCache));
        setAllGames(p => newAllGames);

        let newGames: Game[] = [];
        ret.forEach((game) => {
            let foundHome = game.homeTeam.players.find(player => player.toLowerCase() === parsedParamName.toLowerCase());
            let foundAway = game.awayTeam.players.find(player => player.toLowerCase() === parsedParamName.toLowerCase());

            if(foundAway || foundHome){
                let newGame = game;
                newGame.stats = fillStats(
                    parsedParamName, 
                    'Whole Game', 
                    foundHome ? game.homeTeam.actions : game.awayTeam.actions
                );
                newGames.push(game);
            }
        })
        setGames(newGames);
    }

    if(!isLoading && gamesWithPlayer.length === 0) return (
        <div style={{
            width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center',
            display:'flex', flexDirection:'column'
        }}>
            <h1>{parsedParamName}</h1>
            <h1 style={{}}>Player Doesn't Exist or Has No Games</h1>
        </div>
    )

    if(!isLoading) return (
        <div style={{minHeight:'100vh'}}>
            <Hero games={gamesWithPlayer} setGames={setGamesWithPlayer}/>

            <h1 style={{ marginLeft: '75px', marginBottom:'10px'}}>Games</h1>

            <table style={{ width: '80%', borderCollapse: "collapse"}}>
                <thead>
                    <tr style={{ display: 'flex', marginBottom:'20px', alignItems:'center' }}>
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
                    </tr>

                    <tr style={{ display: 'flex' }}>
                        <th style={{ width: '200px' }}>Team</th>
                        {Object.entries(chartCompareTo).map(([key, value]) => (
                            <th style={{ width: '50px' }} key={key}>
                                {key}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {gamesWithPlayer.map((game, index) => (
                        <Row key={index} game={game} chartCompareTo={chartCompareTo} />
                    ))}
                </tbody>
            </table>

            {dateLoadedTo >= new Date() || dateLoadedTo <= new Date('May 3, 2024') ?
                <div style={{ width: '70%', display: 'flex', justifyContent:'center', marginTop:'25px' }}>
                    <p style={{color: '#000', fontSize:12, fontWeight:'bold'}}>
                        Everything is Loaded
                    </p>
                </div>
                :
                <div style={{ width: '70%', display: 'flex', justifyContent:'center', marginTop:'25px' }}>
                    <button 
                        onClick={() => loadMoreTwo()} 
                        style={{
                            width: 100, height:40, borderRadius: 50,
                            background: '#D9D9D9',
                            border: '1px solid #000',
                            display:'flex', justifyContent:'center', alignItems:'center',
                            cursor:'pointer'
                        }}
                    >
                        <p style={{color: '#000', fontSize:12, fontWeight:'bold'}}>
                            Load More
                        </p>
                    </button>
                </div>
            }

            <div style={{height:'100px'}} />

            {/* {!allGamesLoaded.find(gameLoaded => gameLoaded.league === paramLeague)?.loaded ? (
                <div style={{
                    width: '100%', display: 'flex', justifyContent: 'center'
                }} onClick={() => loadMoreTwo()}>
                    Load More
                </div>
            ) : null} */}
        </div>
    )

    return (
        <div style={{
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
            {/* <h2 style={{marginTop:'250px'}}>{}</h2> */}
        </div>
    )
}
