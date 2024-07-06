import { fillStats, Game2 } from "../functions/players";
import wnbaData from './wnba.json';

export const wnbaParsing = async (
    startDate: Date, endDate: Date, paramName: string
): Promise<Game2[]> => {
    let newGames: Game2[] = [];
    const wnbaDataSliced = wnbaData.slice(wnbaData.findIndex(day => new Date(day.gameDate) >= startDate));

    // Create an array to store all fetch promises
    let fetchPromises: Promise<void>[] = [];

    for (let i = 0; i < wnbaDataSliced.length; i++) {
        const day = wnbaDataSliced[i];
        const currDate = new Date(day.gameDate);
    
        // This date has passed so we can parse (unless it is the same day)
        if (currDate < endDate) {
            for (const game of day.games) {
                // Push each fetch promise into the fetchPromises array
                fetchPromises.push(
                    fetch(`https://content-api-prod.nba.com/public/1/leagues/wnba/game/${game.gameId}`)
                        .then(res => res.json())
                        .then(async (gamesRes) => {
                            const players = [...gamesRes.results.depthCharts[0].players, ...gamesRes.results.depthCharts[1].players];
                            
                            for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
                                // Basically takes the name Cait Clark to C. Clark
                                let parsedName = `${players[playerIndex].firstName[0]}. ${players[playerIndex].lastName}`;
                
                                if (paramName.toLocaleLowerCase() === parsedName.toLocaleLowerCase()) {
                                    const gameDataRes = await fetch(`http://localhost:3001/parseGame`, { //Load Game data
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'url': 'https://cdn.wnba.com/static/json/liveData/playbyplay/playbyplay_urlMe.json',
                                            'gameid': game.gameId
                                        }
                                    })

                                    if(gameDataRes.status === 500){ 
                                        //This game hasn't happened yet. Should never get to this point
                                        //as we never pass in an end date above the current day so something
                                        // went wrong
                                    } else {
                                        const gameData = await gameDataRes.json();
                                        newGames.push({
                                            ...gameData,
                                            stats: fillStats(parsedName, "Whole Game", gameData.actions)
                                        });
                                    }
                                    break;
                                }
                            }
                        })
                        .catch(err => {
                            console.log('betterLoadGames err', err);
                        })
                );
            }
        } else {
            break;
        }
    }

    // Wait for all fetch promises to complete
    await Promise.all(fetchPromises);

    return newGames;
};
