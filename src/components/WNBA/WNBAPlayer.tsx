import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import Head from 'next/head';
import { Game2, Stats } from '../../functions/players';
import { Hero } from './Hero';
import { Row } from './Row';
import { NotFound } from '../Player/NotFound';
import {Fantasy} from '../Player/Fantasy';
import { useGlobalContext } from '../../Context/store';
import { loadGamesByTeam } from '../../data/wnbaParsing';

interface Props{

}

export const metadate = {
    title: 'Player Stats Page'
}

/*
    This page is in the url form of /player/WNBA/Caitlyn_clark

    The name has to be perfect or else it doesn't work
*/
export const WNBAPlayer: React.FC<Props> = ({}) => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {players, games, setGames} = useGlobalContext();

    const [gamesWithPlayer, setGamesWithPlayer] = useState<Game2[]>([]);
    const [chartCompareTo, setChartCompareTo] = useState<Stats>({
        "PTS": -1, "REB": -1, "AST":-1,
        "STL": -1, "BLK": -1, "TO": -1, "PF": -1,
        "FGM":  -1, "FGA": -1,
        "3PM": -1, "3PA": -1, 
        "FTM": -1, "FTA": -1,
        "FAN": -1
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [allLoaded, setAllLoaded] = useState<boolean>(false);

    useEffect(() => {
        const fetchGamesByTeam = async () => {
            let parsedName = `${(paramPlayer as string).split('_')[0]} ${(paramPlayer as string).split('_')[1]}`;
            let playerTeam =  players.find(player => `${player.firstName} ${player.lastName}`.toLowerCase() === parsedName.toLowerCase())?.team;

            const gotGames = await loadGamesByTeam(gamesWithPlayer, parsedName, playerTeam as string);
            let sortedGames = gotGames.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            setGames(prevGames => {
                const uniqueNewGames = sortedGames.filter(
                    newGame => !prevGames.some(prevGame => prevGame.id === newGame.id)
                );
                return [...prevGames, ...uniqueNewGames];
            });

            setGamesWithPlayer(sortedGames);
            setIsLoading(false);
        }
        
        // console.log(players)
        setIsLoading(true);
        if(paramPlayer && players.length > 0) {
            fetchGamesByTeam();
        }
        // fetchGames();
    }, [paramPlayer, players])

    const loadMoreByTeam = async (): Promise<void> => {
        setIsLoading(true);

        let parsedName = `${(paramPlayer as string).split('_')[0]} ${(paramPlayer as string).split('_')[1]}`;
        let playerTeam =  players.find(player => `${player.firstName} ${player.lastName}`.toLowerCase() === parsedName.toLowerCase())?.team;

        const gotGames = await loadGamesByTeam(gamesWithPlayer, parsedName, playerTeam as string);
        let sortedGames = gotGames.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setGames(prevGames => {
            const uniqueNewGames = sortedGames.filter(
                newGame => !prevGames.some(prevGame => prevGame.id === newGame.id)
            );
            return [...prevGames, ...uniqueNewGames];
        });

        /* 
            We do this as if we load more games and the same length returns that means
            we don't have any more games to add
        */
        if(sortedGames.length === gamesWithPlayer.length) setAllLoaded(true);
        setGamesWithPlayer(sortedGames);
        setIsLoading(false);
    }

    const handleCompareToChange = (key: string, value: number) => {
        if(value <= -1) value = -1;
        setChartCompareTo(prevState => ({
          ...prevState,
          [key]: value
        }));
    };

    if(!isLoading && gamesWithPlayer.length === 0) return (
        <NotFound />
    )

    if(!isLoading) return (
        <>

        <Head>
            <title>{paramPlayer ? `${(paramPlayer as string).split('_').join(' ')} | Sports Stats` : 'Player Stats Page'}</title>
            <meta name="description" content={paramPlayer ? `Check out the latest stats for ${(paramPlayer as string).split('_').join(' ')}` : 'Player Stats Page'} />
            <meta name="keywords" content={`WNBA, fantasy, rebounds, points, assists, steals, blocks`} />
        </Head>

        <div style={{minHeight:'100vh'}}>
            <Hero games={gamesWithPlayer} setGames={setGamesWithPlayer}/>

            <h1 style={{ marginLeft: '75px', marginBottom:'10px'}}>Games</h1>

            <div style={{display:'flex'}}>
                <table style={{ width: '50%', borderCollapse: "collapse"}}>
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

                <Fantasy paramLeague={paramLeague as string} />
            </div>

            {allLoaded ?
                <div style={{ width: '70%', display: 'flex', justifyContent:'center', marginTop:'25px' }}>
                    <p style={{color: '#000', fontSize:12, fontWeight:'bold'}}>
                        Everything is Loaded
                    </p>
                </div>
                :
                <div style={{ width: '70%', display: 'flex', justifyContent:'center', marginTop:'25px' }}>
                    <button 
                        onClick={() => loadMoreByTeam()} 
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
        </div>

        </>
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
        </div>
    )
}