import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StatBtn } from "../StatBtn";
import { useRouter } from 'next/router';
import { Action, fillStats, Game2 } from "../../../functions/players";
import Image from 'next/image';
import { useGlobalContext } from "../../../Context/store";

type Props = {
    games: Game2[],
    setGames: Dispatch<SetStateAction<Game2[]>>;
}
  

export const Hero: React.FC<Props> = ({games, setGames}) => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const playerName = paramPlayer as string;

    const [pickedBtn, setPickedBtn] = useState<string>('Whole Game')
    const {players} = useGlobalContext();

    const periodSort = (period: string) => {
        let parsedParamName = `${playerName?.split("_")[0]}. ${playerName.split("_")[1]}`
        setPickedBtn(period)

        let newGames: any = [];
        games.forEach((game: any) => {
          newGames.push({
            ...game,
            stats: fillStats(parsedParamName, period, game.actions)
          })
        })
    
        setGames(newGames);
    }
    const currPlayer = players?.find(player => 
        `${player.firstName}_${player.lastName}`.toLowerCase() === playerName.toLowerCase()
    );

    return <div style={{
        width:'100%', height: "370px", background: '#1D1D1D',
        display:'flex', justifyContent:'flex-end',
        flexDirection:'column', paddingLeft: '75px'
    }}>

        <div style={{
            width:'100%', height:'300px', display:'flex', alignItems:'flex-end'
        }}>
            {/* Player name */}
            <div style={{display:'flex', alignItems:'flex-end'}}>
                <div style={{
                    width: '120px', 
                    height: '120px', 
                    background: '#fff', 
                    borderRadius: '50%', 
                    display: 'flex', overflow:'hidden',
                    justifyContent: 'center', alignItems: 'flex-end'
                }}>
                    <Image
                        src={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${currPlayer?.picId}.png`}
                        style={{width: '150px', height: '110px'}}
                        alt={`Pic of ${currPlayer?.firstName} ${currPlayer?.lastName}`} width={150} height={110}
                    />
                </div>

                <div style={{marginLeft:'50px', height:'100px', display:'flex', flexDirection:'column'}}>
                    <h1 style={{color:'#fff', fontSize: 50, margin: 0}}>
                        {currPlayer?.firstName} {currPlayer?.lastName}
                    </h1>
                    <h1 style={{color:'#ccc9c9', fontSize: 25}}>
                        #{currPlayer?.number} - {currPlayer?.city} {currPlayer?.team} - {currPlayer?.position}
                    </h1>
                </div>
            </div>
        </div>

        <div style={{
            display:'flex', flexDirection:'column', justifyContent:'space-between'
        }}>
            <h2 style={{color:'#fff'}}>{pickedBtn}</h2>
            <div style={{display:'flex', marginBottom: '20px'}}>
                <StatBtn text={"Whole Game"} onClick={() => periodSort("Whole Game")} pickedBtn={pickedBtn}/>
                <StatBtn text={"1st Half"} onClick={() => periodSort("1st Half")} pickedBtn={pickedBtn}/>
                <StatBtn text={"2nd Half"} onClick={() => periodSort("2nd Half")} pickedBtn={pickedBtn}/>
                <StatBtn text={"1st Quarter"} onClick={() => periodSort("1st Quarter")} pickedBtn={pickedBtn}/>
                <StatBtn text={"2nd Quarter"} onClick={() => periodSort("2nd Quarter")} pickedBtn={pickedBtn}/>
                <StatBtn text={"3rd Quarter"} onClick={() => periodSort("3rd Quarter")} pickedBtn={pickedBtn}/>
                <StatBtn text={"4th Quarter"} onClick={() => periodSort("4th Quarter")} pickedBtn={pickedBtn}/>
            </div>
        </div>
    </div>
}