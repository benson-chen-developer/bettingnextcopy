import React from 'react'
import { ValorantGame } from '../../Context/PlayerTypes';

interface Props {
    game: ValorantGame,
    pickedBtn: string,
    playerName: string
    // chartCompareTo: Stats
}
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('/');
  const formattedDay = parseInt(day, 10); // Convert to integer to remove leading zeros
  const formattedMonth = parseInt(month, 10); // Convert to integer to remove leading zeros
  return `${year}-${formattedMonth}-${formattedDay}`;
}

export const Row:React.FC<Props> = ({game, playerName, pickedBtn}) => {
    const player = game.players.find(player => player.name === playerName);

    /* The player stats array is seperated into many portions and each number is the selected portion */
    let playerAmount = {
        kills: 0, assists: 0, deaths: 0
    }; 
    
    if(pickedBtn === 'All Maps') {
        playerAmount.kills = player?.kills[3] as number;
        playerAmount.deaths = player?.deaths[3] as number;
        playerAmount.assists = player?.assists[3] as number;
    } 
    else if(pickedBtn === 'Map 1'){
        playerAmount.kills = player?.kills[0] as number;
        playerAmount.deaths = player?.deaths[0] as number;
        playerAmount.assists = player?.assists[0] as number;
    }
    else if(pickedBtn === 'Map 2'){
        playerAmount.kills = player?.kills[6] as number;
        playerAmount.deaths = player?.deaths[6] as number;
        playerAmount.assists = player?.assists[6] as number;
    }
    else if(pickedBtn === 'Map 3'){
        playerAmount.kills = player?.kills[9] as number;
        playerAmount.deaths = player?.deaths[9] as number;
        playerAmount.assists = player?.assists[9] as number;
    }
    else if (pickedBtn === 'Map 1+2') {
        playerAmount.kills = (player?.kills[0] ?? 0) + (player?.kills[6] ?? 0);
        playerAmount.deaths = (player?.deaths[0] ?? 0) + (player?.deaths[6] ?? 0);
        playerAmount.assists = (player?.assists[0] ?? 0) + (player?.assists[6] ?? 0);
    }
    else if (pickedBtn === 'Map 2+3') {
        playerAmount.kills = (player?.kills[6] ?? 0) + (player?.kills[9] ?? 0);
        playerAmount.deaths = (player?.deaths[6] ?? 0) + (player?.deaths[9] ?? 0);
        playerAmount.assists = (player?.assists[6] ?? 0) + (player?.assists[9] ?? 0);
    } 
    else if (pickedBtn === 'Map 1+3') {
        playerAmount.kills = (player?.kills[0] ?? 0) + (player?.kills[9] ?? 0);
        playerAmount.deaths = (player?.deaths[0] ?? 0) + (player?.deaths[9] ?? 0);
        playerAmount.assists = (player?.assists[0] ?? 0) + (player?.assists[9] ?? 0);
    } 

    return (
        <tr style={{display:'flex'}}>
            <th style={{width:'200px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <h4>{formatDate(game.date)}</h4>
                <h4>@{game.oppTeam}</h4>
            </th>

            <Square 
                amount={playerAmount.kills} 
            />
            <Square 
                amount={playerAmount.deaths} 
            />
            <Square 
                amount={playerAmount.assists} 
            />
        </tr>
    )
}

interface PropsTwo {
  amount: number,
//   compareAmount: number
}

const Square: React.FC<PropsTwo> = ({amount}) => {
  let bgColor = '#D9D9D9';
  let amountParsed = amount % 1 !== 0 ? amount.toFixed(1) : amount;

//   if(amount > compareAmount) bgColor = '#B1DEA3';
//   if(amount === compareAmount) bgColor = '#f7f259';
//   if(amount < compareAmount) bgColor = '#f94352';
//   else if(compareAmount < 0) bgColor = '#D9D9D9';

  return(
    <th style={{display:'flex', justifyContent:'center'}}>
      <div style={{
        width: "50px",
        height: "35px",
        background: bgColor,
        borderRadius: 5,
        overflow: 'hidden',
      }}>
        <p style={{
            margin: 0,
            padding: 0,
            lineHeight: '35px',
            height: '35px',
            overflow: 'hidden'
        }}>{amountParsed}</p>
      </div>
    </th>
  )
}
