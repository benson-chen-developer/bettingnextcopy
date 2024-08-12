import React, { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners';
import { TrendingPlayer } from '../../../Context/PlayerTypes';
import { SportSquare } from '../../Nav/SearchBar/DropDown/SportDropDown'
import { PlayerBox } from './PlayerBox';

export const TrendingPage = () => {
    const marginLeftSpacing = '50px'; const spaceBetween = '30px';
    const trendings = [
        {name:'All'},
        {name:'WNBA'},
        {name:'CS'},
        {name:'Valorant'},
        {name:'LOL'}
    ];
    const [trendingPlayers, setTrendingPlayers] = useState<TrendingPlayer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedTab, setSelectedTab] = useState<string>(trendings[0].name);

    useEffect(() => {
        const newTrendingPlayers = [
            {
                firstName: "Cait",
                lastName: "Clark",
                picId: "1642286",
                team: "IND",
                playerId: "1642286",
                sport: "WNBA",
                oppTeam: "",
                date: "",
                tournament: ""
            },
            {
                firstName: "Wyzo",
                lastName: "",
                picId: "",
                team: "Vitality",
                playerId: "",
                sport: "CS",
                oppTeam: "",
                date: "",
                tournament: ""
            }
        ]

        setTrendingPlayers(newTrendingPlayers);
        setLoading(false);
    }, [])

    return (
        <>
            <h1 style={{color:'#fff', fontWeight:'bold', fontSize: '2em', margin: `100px 0px ${spaceBetween} ${marginLeftSpacing}`}}>
                Trending 🔥
            </h1>

            <div style={{display:'flex', marginLeft: marginLeftSpacing, marginBottom:spaceBetween}}>
                {trendings.map((trending, index) => 
                    <SportSquare selected={trending.name === selectedTab} sport={trending.name} setSport={setSelectedTab}/>
                )}
            </div>

            <div style={{width:'100%', marginTop:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{width:'95%', height:'1px', background:'#545454', borderRadius:'10px'}} />
            </div>

            <div className="trending-box">
                {loading ? 
                    <div style={{ marginLeft: '50px', marginTop: '20px' }}>
                        <ClipLoader
                            color={'#fff'}
                            loading={true}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                        :
                    <div className="trending-container">
                        {trendingPlayers
                            .filter(player => selectedTab === "All" || player.sport === selectedTab)
                            .map((player, index) => {
                                return (
                                    <PlayerBox 
                                        key={index} 
                                        player={player}
                                    />
                                );
                            }
                        )}
                    </div>
                }
            </div>
        </>
    )
}