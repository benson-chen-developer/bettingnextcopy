import React, { useContext } from 'react'
import { PlayersContext, PlayerType } from '../../Context';

interface Props{
    parsedParamName: string
}

/*
    Don't worry what this does just know it is used to find similar names to the one
    the user searched
*/
const levenshteinDistance = (a: string, b: string): number => {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b[i - 1] === a[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1 // deletion
          );
        }
      }
    }
    return matrix[b.length][a.length];
};

/*
    Returns all the player names that are similar to the one we searched
*/
export const findSimilarLastNames = (players: PlayerType[], searchName: string, maxAllowedDistance: number): PlayerType[] => {
    return players.filter(player => levenshteinDistance(player.lastName, searchName) <= maxAllowedDistance);
};

export const NotFound: React.FC<Props> = ({parsedParamName}) => {
    const players = useContext(PlayersContext);
    const lastName = parsedParamName.split(". ")[1];

    const similarPlayers = findSimilarLastNames((players as PlayerType[]), lastName, 2);

    // console.log(similarPlayers)

    return(
        <div style={{
            width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center',
            display:'flex', flexDirection:'column'
        }}>
            {similarPlayers.length === 0 ?
                <>
                    <h1>{parsedParamName}</h1>
                    <h1 style={{}}>Player Doesn't Exist or Has No Games</h1>
                </> 
                    :
                <div>
                    <h2>Did You Mean</h2>
                    
                    {similarPlayers.map((player, index) => 
                        <PlayerBox player={player} key={index}/>
                    )}
                </div>
            }
        </div>
    )
}

type PlayerBoxProps = {
    player: PlayerType;
};
  
const PlayerBox: React.FC<PlayerBoxProps> = ({ player }) => {
    return(
        <div style={{
            width:'200px', height:'100px', border:'2px solid #1E1E1E', borderRadius:20,
            display:'flex', alignItems:'center', justifyContent:'space-evenly'
        }}>
            <img 
                style={{width:'100px', height:'80px'}}
                src={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${player.picId}.png`}
                alt="Player Picture"
            />
            <p>{player.firstName} {player.lastName}</p>
        </div>
    )
}
