import React, { Dispatch, SetStateAction, useState } from 'react'
import { pink } from '../../data/colors'
import { SearchBar } from './SearchBar'

interface Props {
    
}

export const NavBar: React.FC<Props> = ({
    
}) => {
    const promoCodes = [
        {
            name:'PrizePicks',
            url: 'https://app.prizepicks.com/sign-up?invite_code=PR-9LWKBZ1',
            code: 'PR-9LWKBZ1'
        },
        {
            name:'UnderDog Fantasy',
            url: 'https://play.underdogfantasy.com/goodluck255',
            code: 'GOODLUCK255'
        },
    ]
    return (
        <nav style={{
            width: '100%', 
            height: '70px', 
            background: pink, 
            display: 'flex',
            alignItems: 'center',
            position: 'fixed', // Make the navbar fixed
            top: 0, // Stick it to the top
            zIndex: 1000 // Ensure it stays above other content
        }}>
            <h1 style={{fontWeight:'bold', marginLeft: '30px'}}>Sports Stats</h1>

            <SearchBar />
        </nav>
    )
}