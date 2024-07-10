import React, { useEffect, useState } from 'react'
import { black } from '../../data/colors'
import { getTodaysPlayers } from '../../data/trending';
import ResponsiveTrendingBoxes from './ResponsiveTrendingBoxes';
import { Tab } from './Tab';
import { TrendingBox } from './TrendingBox';

const marginLeftSpacing = '50px';

export type TrendingPlayer = {
    firstName: string,
    lastName: string
    wnbaId: string,
}

export const Trending = () => {
    const trendings = [
        {name:'WNBA', comingSoon: false},
        {name:'MLB', comingSoon:true},
        {name:'Soccer', comingSoon:true}
    ];
    const [homeStarters, setHomeStarters] = useState([]);
    const [awayStarters, setAwayStarters] = useState([]);
    const [trendingGames, setTrendingGames] = useState<any[]>([]);
    const [selectedTab, setSelectedTab] = useState<string>(trendings[0].name);

    useEffect(() => {
        const fetchTodayGames = async () => {
            let newTrendingGames: any[] = [];
            
            try {
                let todayGames = await getTodaysPlayers('WNBA');
    
                for (const game of todayGames) {
                    const gameDetails = await fetch(`http://localhost:3001/getPlayersInGame/${game.gameId}`);
                    const gameDetailsJson = await gameDetails.json();
    
                    /* 
                        These are all players that play
                        We wanna filter via rank as 1 ranks are starters I assume
                    */
                    const homeStarters = gameDetailsJson.results.depthCharts[0].players
                        .filter((player: any) => player.rank === "1");
                    const awayStarters = gameDetailsJson.results.depthCharts[1].players
                        .filter((player: any) => player.rank === "1");

                    setHomeStarters(homeStarters);
                    setAwayStarters(awayStarters);

                    newTrendingGames.push(gameDetailsJson);
                }
    
                setTrendingGames(newTrendingGames);
            } catch (error) {
                console.error('Error fetching today\'s games:', error);
            }
        };
    
        fetchTodayGames();
    }, []);
    
    const spaceBetween = '30px';
    return (
        <div style={{minHeight:'100vh', minWidth: '100vw', background: black, display:'flex', flexDirection:'column'}}>
            <h1 style={{color:'#fff', fontWeight:'bold', fontSize: '2em', margin: `100px 0px ${spaceBetween} ${marginLeftSpacing}`}}>
                Trending 🔥
            </h1>

            <div style={{display:'flex', marginLeft: marginLeftSpacing, marginBottom:spaceBetween}}>
                {trendings.map((trending, index) => 
                    <Tab 
                        key={index} 
                        name={trending.name} selectedTab={selectedTab} 
                        setSelectedTab={setSelectedTab}
                        comingSoon={trending.comingSoon}
                    />
                )}
            </div>

            {/* <div style={{display:'flex', marginLeft: marginLeftSpacing, marginTop: '30px'}}>
                {trendingGames.map((game, index) => 
                    <React.Fragment key={index}>
                        {game.results.projectedStarters.teams[0].players
                            .filter((_:any, starterIndex: number) => starterIndex === 1 || starterIndex === 3)
                            .map((starter: any, starterIndex: number) => 
                                <TrendingBox 
                                    leagueName={"WNBA"} 
                                    player={starter} 
                                    key={starterIndex} 
                                    game={game}
                                />
                            )
                        }
                        {game.results.projectedStarters.teams[1].players
                            .filter((_:any, starterIndex: number) => starterIndex === 1 || starterIndex === 3)
                            .map((starter: any, starterIndex: number) => 
                                <TrendingBox 
                                    leagueName={"WNBA"} 
                                    player={starter} 
                                    key={starterIndex} 
                                    game={game}
                                />
                            )
                        }
                    </React.Fragment>
                )}
            </div> */}
            <div style={{width:'100%', marginTop:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{width:'95%', height:'1px', background:'#545454', borderRadius:'10px'}} />
            </div>

            <div className="trending-box">
                <ResponsiveTrendingBoxes games={trendingGames}/>
            </div>
        </div>
    )
}
