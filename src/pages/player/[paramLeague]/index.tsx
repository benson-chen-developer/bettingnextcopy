import React, { useEffect } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ValHome } from '../../../components/Valorant/ValHome';
import { WNBAPlayer } from '../../../components/WNBA/WNBAPlayer';
import { LeaguePlayer } from '../../../components/Player/League/LeaguePlayer';

const Index = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    
    useEffect(() => {
        console.log("This is not a player page");
    }, []);

    return (
        <div style={{
            width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center',
            display:'flex'
        }}>
        </div>
    )
}

export default Index;