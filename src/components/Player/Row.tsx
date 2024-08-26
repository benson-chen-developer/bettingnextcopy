import React, { useEffect, useState } from 'react'

interface Props {
    pickedBtn: string,
    chartCompareTo: number[],
    team: string,
    date: string,
    /* 
      Will always be an array of stats to map over
        - So like [3,3,4] (KDA) or [10,10,30] (PRA)
    */
    displayedStats: number[],
    extraText: string
}

/*
  Displayed stats is the box score essentially. It should be an array so we can just loop through it
*/
export const Row:React.FC<Props> = ({displayedStats, pickedBtn, chartCompareTo, team, date, extraText}) => {
    return (
        <tr style={{display:'flex', minHeight: '35px', marginRight:'20px'}}>
            <th style={{width:'200px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <h4 style={{margin:0}}>{date}</h4>
                <h4 style={{margin:0}}>@{team}</h4>
            </th>

            {displayedStats[0] === -1 ? 
              <div  style={{
                width: "200px", height: "100%", display:'flex', justifyContent:'center', alignItems:'center'
              }}>
                {extraText ? 
                  <p style={{fontSize: '15px', fontWeight:'bold', color:'#3d3d3d'}}>{extraText}</p>
                    :
                  <p style={{fontSize: '15px', fontWeight:'bold', color:'#3d3d3d'}}>Did Not Play</p>
                }
              </div>
                :
              <>
                {chartCompareTo.map((value, index) => (
                    <Square 
                        key={index}
                        compareAmount={value}
                        amount={displayedStats[index]} 
                    />
                ))}
              </>
            }
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
