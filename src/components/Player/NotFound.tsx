import React from 'react'
import Image from 'next/image';
import { useGlobalContext } from '../../Context/store';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';
import { PlayerType, WNBAPlayer } from '../../Context/PlayerTypes';

interface Props{
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
export const findSimilarLastNames = (players: PlayerType[], input: string, maxAllowedDistance: number): any[] => {
    const trimmedInput = input.trim();

    let firstName = ''; let lastName = ''; 
    let foundPlayers = new Set<any>();

    /* This means if the user has used a space while typing */
    if (trimmedInput.split(' ').length > 1) {
        firstName = trimmedInput.split(' ')[0];
        lastName = trimmedInput.split(' ')[1];
    
        for (const player of players) {
            if (levenshteinDistance(player.firstName, firstName) <= maxAllowedDistance) {
                foundPlayers.add(player);
            }
            if (foundPlayers.size >= 5) break;

            if (levenshteinDistance(player.lastName, lastName) <= maxAllowedDistance) {
                foundPlayers.add(player);
            }
            if (foundPlayers.size >= 5) break;
        }
    } else {
        for (const player of players) {
            if (levenshteinDistance(player.firstName, trimmedInput) <= maxAllowedDistance) {
                foundPlayers.add(player);
            }
            if (foundPlayers.size >= 5) break;

            if (levenshteinDistance(player.lastName, trimmedInput) <= maxAllowedDistance) {
                foundPlayers.add(player);
            }
            if (foundPlayers.size >= 5) break;
        }
        firstName = trimmedInput;
    }
    // console.log(foundPlayers)
    
    return Array.from(foundPlayers);
};

/*
    We only need the paramPlayer name

    1) Make a call depending on league to get all the players of that league
    2) The players will be PlayerType so we can just try to find their names with findSimilarLastNames
    3) Anyone returned is displayed
*/
export const NotFound: React.FC<Props> = ({}) => {
    const {players, fetchLolPlayers, fetchValorantPlayers} = useGlobalContext();
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const [allPlayers, setAllPlayers] = useState<PlayerType[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [similarPlayers, setSimilarPlayers] = useState<WNBAPlayer[]>([]);

    useEffect(() => {
        let players: PlayerType[] = [];
        
        const fetchPlayers = async () => {
            if (paramLeague![0].toLowerCase() === 'lol') {
                players = await fetchLolPlayers();
            }
            else if(paramLeague![0].toLowerCase() === 'valorant') {
                players = await fetchValorantPlayers();
            }

            setAllPlayers(players);
            setSimilarPlayers(findSimilarLastNames(players, paramPlayer as string, 2));
            setIsLoading(false);
        };

        if(paramLeague) fetchPlayers();
    }, [])

    if(isLoading) return <ClipLoader
        color={'#000'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />

    return(
        <div style={{
            width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center',
            display:'flex', flexDirection:'column'
        }}>
            {similarPlayers.length === 0 ?
                <>
                    <h1>{paramPlayer as string}</h1>
                    <h1 style={{}}>Player Doesn't Exist or Has No Games</h1>
                </> 
                    :
                <div style={{display:'flex', alignItems:'center', flexDirection:'column', width:'100%'}}>
                    <h2>Did You Mean</h2>
                    
                    <div style={{display:'flex'}}>
                        {similarPlayers.map((player, index) => 
                            <PlayerBox player={player} key={index}/>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

type PlayerBoxProps = {
    player: WNBAPlayer;
};
  
const PlayerBox: React.FC<PlayerBoxProps> = ({ player }) => {
    return(
        <Link href={`/player/WNBA/${player.firstName}_${player.lastName}`} style={{textDecoration: 'none', color:'black'}}>
            <div style={{
                width:'200px', height:'100px', border:'2px solid #1E1E1E', borderRadius:20,
                display:'flex', alignItems:'center', margin:'20px',
                cursor:'pointer'
            }}>
                <Image
                    src={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${player.picId}.png`}
                    style={{width: '50%', height: '75%'}}
                    alt={`Pic of ${player.firstName} ${player.lastName}`} width={90} height={75}
                />
                <p>{player.firstName} {player.lastName}</p>
            </div>
        </Link>
    )
}