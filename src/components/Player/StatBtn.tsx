import React from "react"

type StatBtnProps = {
    text: string,
    pickedBtn:string,
    onClick: () => void
}
  
const black = "#1f202d";

export const StatBtn: React.FC<StatBtnProps> = ({ text, pickedBtn, onClick }) => {
    return (
        <button 
            onClick={() => onClick()} 
            style={{
                width: 100, height:40, borderRadius: 50,
                background: pickedBtn === text ? '#fff' : black, 
                border: '1px solid #fff',
                display:'flex', justifyContent:'center', alignItems:'center',
                margin: text === "Whole Game" ? "5px 5px 5px 0px" : "5px", 
                cursor:'pointer'
            }}
        >
            <h2 style={{
                color: pickedBtn === text ? '#000' : '#fff', fontSize:12, fontWeight:'bold'
            }}>
                {text}
            </h2>
        </button>
    );
}