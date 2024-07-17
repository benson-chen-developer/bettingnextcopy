import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Action, fillStats, Game2 } from "../../functions/players";
import Image from 'next/image';

type Props = {
    playerName: string
    picUrl: string,
    number: string,
    team: string,
    position: string,
    pickedBtn: string,
    setPickedBtn: Dispatch<SetStateAction<string>>,
    allPickedBtns: string[]
}
  

export const Hero: React.FC<Props> = ({
    playerName, number, team, position, picUrl, allPickedBtns, pickedBtn, setPickedBtn
}) => {

    return <div style={{
        width:'100%', height: "370px", background: '#1D1D1D',
        display:'flex', justifyContent:'flex-end',
        flexDirection:'column', paddingLeft: '75px'
    }}>

        <div style={{width:'100%', height:'300px', display:'flex', alignItems:'flex-end'}}>

            <div style={{display:'flex', alignItems:'flex-end'}}>

                {/* Player Pic */}
                <div style={{
                    width: '120px', height: '120px', 
                    background: '#fff', borderRadius: '50%', 
                    display: 'flex', overflow:'hidden',
                    justifyContent: 'center', alignItems: 'flex-end'
                }}>
                    {picUrl !== "" ?
                        <Image
                            src={picUrl}
                            style={{width: '150px', height: '110px'}}
                            alt={`Pic of ${playerName}`} width={150} height={110}
                        /> 
                            :
                        <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 8 8">
                            <path fill="#1D1D1D" d="M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0M1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2c-.54.61-1.28 1-2.09 1c-.81 0-1.55-.39-2.09-1" />
                        </svg>
                    }
                </div>

                {/* Player name */}
                <div style={{marginLeft:'50px', height:'100px', display:'flex', flexDirection:'column'}}>
                    <h1 style={{color:'#fff', fontSize: 50, margin: 0}}>
                        {playerName}
                    </h1>
                    <h1 style={{color:'#ccc9c9', fontSize: 25}}>
                        {number !== "" ? `#${number}  -` : ""} {team !== "" ? `${team}` : ""} {position !== "" ? `- ${position}` : ""}
                    </h1>
                </div>
            </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <h2 style={{color:'#fff'}}>{pickedBtn}</h2>
            <div style={{display:'flex', marginBottom: '20px'}}>
                {allPickedBtns.map((btnText, index) => 
                    <StatBtn 
                        onClick={() => setPickedBtn(btnText)} key={index} index={index}
                        pickedBtn={pickedBtn} btnText={btnText}
                    />
                )}
            </div>
        </div>
    </div>
}

type StatBtnProps = {
    btnText: string,
    index: number,
    pickedBtn:string,
    onClick: () => void
}
  
const black = "#1f202d";

const StatBtn: React.FC<StatBtnProps> = ({ btnText, pickedBtn, onClick, index }) => {
    return (
        <button 
            onClick={() => onClick()} 
            style={{
                width: 100, height:40, borderRadius: 50,
                background: pickedBtn === btnText ? '#fff' : black, 
                border: '1px solid #fff',
                display:'flex', justifyContent:'center', alignItems:'center',
                margin: index === 0 ? "5px 5px 5px 0px" : "5px", 
                cursor:'pointer'
            }}
        >
            <p style={{
                color: pickedBtn === btnText ? '#000' : '#fff', fontSize:12, fontWeight:'bold'
            }}>
                {btnText}
            </p>
        </button>
    );
}