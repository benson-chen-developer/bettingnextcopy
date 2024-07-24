import React, { useEffect, useState } from 'react'

interface Props {
    pickedBtn: string,
    chartCompareTo: number[],
    team: string,
    date: string,
    displayedStats: number[],
}
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('/');
  const formattedDay = parseInt(day, 10); // Convert to integer to remove leading zeros
  const formattedMonth = parseInt(month, 10); // Convert to integer to remove leading zeros
  return `${year}-${formattedMonth}-${formattedDay}`;
}

/*
  Displayed stats is the box score essentially. It should be an array so we can just loop through it
*/
export const Row:React.FC<Props> = ({displayedStats, pickedBtn, chartCompareTo, team, date}) => {

    /* The player stats array is seperated into many portions and each number is the selected portion */
    
    return (
        <tr style={{display:'flex'}}>
            <th style={{width:'200px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <h4 style={{margin:0}}>{date}</h4>
                <h4 style={{margin:0}}>@{team}</h4>
            </th>

            {chartCompareTo.map((value, index) => (
                <Square 
                    key={index}
                    compareAmount={value}
                    amount={displayedStats[index]} 
                />
            ))}
        </tr>
    )
}

interface PropsTwo {
  amount: number, //Actual value
  compareAmount: number //Number you compare to 
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
