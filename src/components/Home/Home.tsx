import React from 'react'
import { black } from '../../data/colors'
import { SearchBar } from '../Nav/SearchBar'
import { TrendingBox } from './TrendingBox'

export type Trending = {
    name: string,
    isComing: boolean
}

export const Home = () => {
    const trendings: Trending[] = [
        {name: 'WNBA', isComing: false},
        {name: 'MLB', isComing: true},
        {name: 'Soccer', isComing: true},
    ];

    return (
        <div style={{minHeight:'100vh', minWidth: '100vw', background: black, display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <h1 style={{color:'#fff', fontWeight:'bold', fontSize: '4em'}}>Sports Stats</h1>
        
            <SearchBar widthSpacing='50%' marginLeftSpacing="0px"/>

            <h1 style={{color:'#fff', fontWeight:'bold', fontSize: '2em', marginTop: '75px'}}>
                Trending 🔥
            </h1>
            <div style={{display:'flex', justifyContent:'space-evenly', width: '50%'}}>
                {trendings.map((trending, index) => 
                    <TrendingBox trending={trending}/>
                )}
            </div>
        </div>
    )
}