import React, { useEffect, useState } from 'react'

interface Props {
    compareTo: string[],
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
export const Row:React.FC<Props> = ({displayedStats, team, date, extraText, compareTo}) => {
    return (
        <tr style={{display:'flex', minHeight: '35px', marginRight:'20px'}}>
            <th style={{width:'200px', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                <h4 style={{margin:0}}>{date}</h4>
                <h4 style={{margin:0}}>@{team.slice(0,4)}</h4>
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
                {compareTo.map((value, index) => (
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
  compareAmount: string //Number you compare to 
}

const Square: React.FC<PropsTwo> = ({ amount, compareAmount }) => {
  let bgColor = '#D9D9D9';
  let amountParsed = parseFloat(compareAmount);
  console.log(amountParsed)
  if (isNaN(amountParsed)) {
    amountParsed = -1;
  }

  // Set background color based on amountParsed compared to compareAmount
  if (amountParsed > amount) {
    bgColor = '#B1DEA3';
  } 
  else if (amountParsed < 0) {
    bgColor = '#D9D9D9';
  }
  else if (amountParsed === amount) {
    bgColor = '#f7f259';
  } else if (amountParsed < amount) {
    bgColor = '#f94352';
  }

  return (
    <th style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          width: "50px",
          height: "35px",
          background: bgColor,
          borderRadius: 5,
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            margin: 0,
            padding: 0,
            lineHeight: '35px',
            height: '35px',
            overflow: 'hidden',
          }}
        >
          {amount}
        </p>
      </div>
    </th>
  );
};

