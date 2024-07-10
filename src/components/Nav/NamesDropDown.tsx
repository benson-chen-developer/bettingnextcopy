import React, { useContext, useEffect, useState } from 'react'
import { PlayersContext, PlayerType } from '../../Context'
import { findSimilarLastNames } from '../Player/NotFound';

interface Props {
    input: string
}

export const NamesDropDown: React.FC<Props> = ({input}) => {
    const players = useContext(PlayersContext);
    const [similarPlayers, setSimilarPlayers] = useState<PlayerType[]>([]);

    useEffect(() => {
        let lastName = input.split(' ')[1];
        if(lastName){
            let similarPlayers = findSimilarLastNames((players as PlayerType[]), lastName, 2);
            setSimilarPlayers(similarPlayers)
        }
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
                    width:'100%', height:'50px', display:'flex', alignItems:'center'
                }}>
                    <img 
                        style={{width:'50px', height:'35px', marginLeft:'10px'}}
                        src={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${player.picId}.png`}
                        alt="Picture"
                    />
                    <p style={{marginLeft: '15px'}}>{player.firstName} {player.lastName}</p>
                </div>
            )}
        </div>
    )
}
