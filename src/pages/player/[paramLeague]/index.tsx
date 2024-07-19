import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ValHome } from '../../../components/Valorant/ValHome';
import { WNBAPlayer } from '../../../components/WNBA/WNBAPlayer';

const Index = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;

    return (
        <div style={{
            width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center',
            display:'flex'
        }}>
            {(paramLeague as string)?.toLowerCase() === "WNBA" && <WNBAPlayer />}
            {(paramLeague as string)?.toLowerCase() === "valorant" && <ValHome />}
        </div>
    )
}

export default Index;