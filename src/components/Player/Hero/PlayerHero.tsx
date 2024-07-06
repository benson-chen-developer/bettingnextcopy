import React from 'react'

interface Props {
    picId: number | undefined,
    paramName: string | undefined
}

export const PlayerHero: React.FC<Props>  = ({picId, paramName}) => {
    return (
        <div style={{
            width:'100%', display:'flex', height:'300px', alignItems:'flex-end'
        }}>
            <img 
                src={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${picId}.png`}
                style={{width: 130, height:100}}
            />

            <div style={{marginLeft:'25px', height:100}}>
                <h1 style={{color:'#fff', fontSize: 50}}>
                    {`${paramName?.split("_")[0].toLocaleUpperCase()}. ${paramName?.split("_")[1].toUpperCase()}`}
                </h1>
            </div>
        </div>
    )
}
