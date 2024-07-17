import React, { useEffect, useState } from 'react'
import { findSimilarLastNames } from '../Player/NotFound';
import Image from 'next/image';
import { useGlobalContext } from '../../Context/store';
import { searchPlayer } from './SearchBar';
import { WNBAPlayer } from '../../Context/PlayerTypes';

interface Props {
    input: string
}

export const NamesDropDown: React.FC<Props> = ({input}) => {
    const {players} = useGlobalContext();
    const [similarPlayers, setSimilarPlayers] = useState<WNBAPlayer[]>([]);

    useEffect(() => {
        let similarPlayers = findSimilarLastNames(players, input, 2);
        setSimilarPlayers(similarPlayers)
    }, [input])

    if(input.trim() === '') return null;

    if(similarPlayers.length === 0) return (
        <div style={{
            width: '100%', minHeight:'50px', background:'#eaeaea', position:'absolute',
            top: '100%', left: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
            borderLeft: '2px solid black', 
            borderRight: '2px solid black',
            borderBottom: '2px solid black',
        }}>
            <div style={{
                width:'100%', height:'50px', display:'flex', alignItems:'center'
            }}>
                <p style={{marginLeft: '15px'}}>Can't Find {input}</p>
            </div>
        </div>
    )

    return (
        <div style={{
            width: '100%', background:'#eaeaea', position:'absolute',
            top: '100%', left: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
            borderLeft: '2px solid black', 
            borderRight: '2px solid black',
            borderBottom: '2px solid black',
        }}>
            {similarPlayers.map((player, index) => 
                <div key={index} style={{
                    width:'100%', height:'50px', display:'flex', alignItems:'center', cursor:'pointer'
                }} onClick={() => searchPlayer(`${player.firstName}_${player.lastName}`, 'WNBA', true)}>
                    <Image
                        src={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${player.picId}.png`}
                        alt={`Headshot of ${player.firstName} ${player.lastName}`}
                        width={50} height={35}
                        style={{marginLeft:'10px'}}
                    />
                    <p style={{marginLeft: '15px'}}>{player.firstName} {player.lastName}</p>
                </div>
            )}
        </div>
    )
}
