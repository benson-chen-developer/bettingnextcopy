import React from 'react'
import { Game, Game2, Stats } from '../../functions/players'

interface Props {
    // game: Game,
    game: Game2,
    chartCompareTo: Stats
}
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  const formattedDay = parseInt(day, 10); // Convert to integer to remove leading zeros
  const formattedMonth = parseInt(month, 10); // Convert to integer to remove leading zeros
  return `${formattedMonth}-${formattedDay}`;
}

export const Row:React.FC<Props> = ({game, chartCompareTo}) => {
  if(game.stats.PTS === -1) return null;

  return (
    <tr style={{display:'flex'}}>
        <th style={{width:'200px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
          {formatDate(game.date)}  {game.teams[0]}@{game.teams[1]}
        </th>
        {Object.entries(game.stats).map(([key, value]) => (
          <Square 
            amount={value} 
            compareAmount={chartCompareTo[key as keyof Stats]} 
            key={key} 
          />
        ))}
    </tr>
  )
}

interface PropsTwo {
  amount: number,
  compareAmount: number
}

const Square: React.FC<PropsTwo> = ({amount, compareAmount}) => {
  let bgColor = '#D9D9D9';
  let amountParsed = amount % 1 !== 0 ? amount.toFixed(1) : amount;

  if(amount > compareAmount) bgColor = '#B1DEA3';
  if(amount === compareAmount) bgColor = '#f7f259';
  if(amount < compareAmount) bgColor = '#f94352';
  else if(compareAmount < 0) bgColor = '#D9D9D9';

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
