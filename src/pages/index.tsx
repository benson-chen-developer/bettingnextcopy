import React, { useEffect, useState } from 'react'
import { black } from '../data/colors'
import ResponsiveTrendingBoxes from '../components/Home/ResponsiveTrendingBoxes';
import { Tab } from '../components/Home/Tab';
import { TrendingBox } from '../components/Home/TrendingBox';
import Head from 'next/head';

const marginLeftSpacing = '50px';

export type TrendingPlayer = {
    firstName: string,
    lastName: string
    wnbaId: string,
}

const Trending = () => {
    const trendings = [
        {name:'WNBA', comingSoon: false},
        {name:'MLB', comingSoon:true},
        {name:'Soccer', comingSoon:true}
    ];
    const [trendingGames, setTrendingGames] = useState<any[]>([]);
    const [selectedTab, setSelectedTab] = useState<string>(trendings[0].name);
    const [homePlayersLoaded, setHomePlayersLoad] = useState<boolean>(false);

    useEffect(() => {
        const fetchTodayGames = async () => {
            try {
                // const newTrendingGames = await fetchTodayWNBAGames();
                const newTrendingGames: any [] = [];
                setHomePlayersLoad(true);
                setTrendingGames(newTrendingGames);
            }
            catch (error) {
                setHomePlayersLoad(true);
                console.error('Error fetching today\'s games:', error);
            }
        };
    
        fetchTodayGames();
    }, []);
    
    const spaceBetween = '30px';
    return (
        <>

        <Head>
            <title>{'Trending Players'}</title>
            <meta name="description" content={"Players playing games today and trending"} />
            <meta name="ahrefs-site-verification" content="881627b9cdfce1e5ef0a890ec7d5477594ec45471d470d5eeaadea5976b61433" />
        </Head>

        <TrendingPa

        </>
    )
}

export default Trending;