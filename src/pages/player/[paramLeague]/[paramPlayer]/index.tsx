import React, { useState } from 'react'
import { fillStats, Game2, Stats } from '../../../../functions/players';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { NotFound } from '../../../../components/Player/NotFound';
import { useGlobalContext } from '../../../../Context/store';
import Head from 'next/head';
import { WNBAPlayer } from '../../../../components/WNBA/WNBAPlayer';
import { ValPlayer } from '../../../../components/Valorant/ValPlayer';
import { LeaguePlayer } from '../../../../components/Player/League/LeaguePlayer';
import { CounterStrikePlayer } from '../../../../components/Player/CS/CounterStrikePlayer';

interface Props{
    // allGamesLoaded: {league: string, loaded: boolean}[]
    // setAllGamesLoaded: Dispatch<SetStateAction<{league: string, loaded: boolean}[]>>
}

export const metadate = {
    title: 'Player Stats Page'
}

/*
    This page is in the url form of /WNBA/Caitlyn_clark

    The name has to be perfect or else it doesn't work
*/
const Player: React.FC<Props> = ({}) => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const [gamesWithPlayer, setGamesWithPlayer] = useState<Game2[]>([]);

    if(paramLeague) return (
        <>

        <Head>
            <title>{paramPlayer ? `${(paramPlayer as string).split('_').join(' ')} | Sports Stats` : 'Player Stats Page'}</title>
            <meta name="description" content={paramPlayer ? `Check out the latest stats for ${(paramPlayer as string).split('_').join(' ')}` : 'Player Stats Page'} />
            <meta name="keywords" content={`WNBA, fantasy, rebounds, points, assists, steals, blocks`} />
        </Head>

        {(paramLeague as string).toLowerCase() === "wnba" && <WNBAPlayer />}
        {(paramLeague as string).toLowerCase() === "valorant" && <ValPlayer />}
        {(paramLeague as string)?.toLowerCase() === "lol" && <LeaguePlayer />}
        {(paramLeague as string)?.toLowerCase() === "cs" && <CounterStrikePlayer />}

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

export default Player;