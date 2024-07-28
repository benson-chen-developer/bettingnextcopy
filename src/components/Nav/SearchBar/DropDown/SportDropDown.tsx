import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { currentAllSports, LeagueIcon } from './SportBtn';

interface Props {
    input: string,
    sport: string,
    setSport: Dispatch<SetStateAction<string>>
    dropDown: string,
    setDropDown:Dispatch<SetStateAction<string>>
}

export const SportDropDown: React.FC<Props> = ({input, sport, setSport, dropDown, setDropDown}) => {
    const [similarSport, setSimilarSport] = useState<string[]>([]);

    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.sport-dropdown') && dropDown === "sports") {
          setDropDown("");
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, [dropDown]);

    return (
        <div style={{
            width: '100%', minHeight:'1px', background:'#eaeaea', position:'absolute',
            top: '100%', left: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
            borderLeft: '2px solid black', display:'flex', alignItems:'center',
            borderRight: '2px solid black', borderBottom: '2px solid black',
        }}>
            {currentAllSports.map((option, index) => 
                <SportSquare selected={option === sport} setSport={setSport} sport={option} key={index}/>
            )}
        </div>
    )
}

interface SquareProps {
    selected: boolean,
    sport: string,
    setSport: Dispatch<SetStateAction<string>>
}

const SportSquare: React.FC<SquareProps>  = ({selected, sport, setSport}) => {
    const [isHovered, setIsHovered] = useState(false);

    if(selected) return(
        <div style={{
            width:"85px", height:'85px', border: '2px solid #F33479', borderRadius: 10,
            background:"#8F3052", display:'flex', justifyContent:'space-evenly', margin: '10px',
            alignItems:'center', flexDirection:'column', cursor:'pointer'
        }}>
             <LeagueIcon sport={sport} size="40px"/>
             <h3 style={{fontSize:'13px', color:'#fff', margin:0}}>
                {sport}
             </h3>
        </div>
    )

    return(
        <div style={{
            width:"85px", height:'85px', borderRadius: 10,
            border: isHovered ? '2px solid #F33479' : '2px solid #B3B3B3', 
            background: isHovered ? "#8F3052": "#7A7A7A", 
            display:'flex', justifyContent:'space-evenly', margin: '10px',
            alignItems:'center', flexDirection:'column', cursor:'pointer'
        }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setSport(sport)}
        >
            <LeagueIcon sport={sport} size="40px"/>
             <h3 style={{fontSize:'13px', color:'#fff', margin:0}}>
                {sport}
             </h3>
        </div>
    )
}