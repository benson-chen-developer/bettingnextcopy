import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fillStats,Game,intialGameParse, Stats } from './functions/players';
import { Player } from './components/Player/Player';
import { NavBar } from './components/Nav/NavBar';
import { TicketPopUp } from './components/TicketPopUp/TicketPopUp';
import { betterLoadGames, gameLinks } from './data/data';
import { getLoadedGamesCookie, LoadedObj, setLoadedGamesCookie } from './functions/cookies';
import { Home } from './components/Home/Home';
import { Missing } from './components/Missing/Missing';
import { Trending } from './components/Home/Trending';

function App() {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [allGamesLoaded, setAllGamesLoaded] = useState<LoadedObj[]>([
    {league: 'WNBA', loaded: false},
    {league: 'MLB', loaded: false}
  ]); //We only load 10 games intially so if the user wants to load more then they would check this box to show it is loaded

  const useLocalStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });
  
    const setValue = (value: any) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };
  
    return [storedValue, setValue];
  }
  const [localStorageValue, setLocalStorageValue] = useLocalStorage('loadedGames', '');

  // useEffect(() => {
  //   /* If we have cached values then don't fetch the values */
  //   // if(localStorageValue){
  //   //   const parsedLocalStorageValue = JSON.parse(localStorageValue);
  //   //   console.log(" cahced", parsedLocalStorageValue[0].games)
  //   //   setAllGames(parsedLocalStorageValue[0].games);
  //   // } else {
  //   //   Promise.all(
  //   //     gameLinks[0].gameIds.slice(0,8).map(gameId =>
  //   //       fetch(`http://localhost:3001/parseGame`, {
  //   //         method: 'GET',
  //   //         headers: {
  //   //           'Content-Type': 'application/json',
  //   //           'url': gameLinks[0].link,
  //   //           'gameid': gameId
  //   //         }
  //   //       })
  //   //       .then(res => res.json())
  //   //     )
  //   //   ).then(gameBodies => {
  //   //       const allFetchedGames = gameBodies.map(bodyContent => {
  //   //         const game = intialGameParse(bodyContent.actions);
  //   //         return {
  //   //           date: bodyContent.date,
  //   //           actions: bodyContent.actions,
  //   //           homeTeam: game[0],
  //   //           awayTeam: game[1],
  //   //           stats: {
  //   //             "PTS": -1, "REB": -1, "AST":-1,
  //   //             "STL": -1, "BLK": -1, "TO": -1,
  //   //             "3PM": -1, "3PA": -1, 
  //   //             "FGM":  -1, "FGA": -1,
  //   //             "FTA": -1, "FTM": -1,
  //   //             "FAN": -1
  //   //           },
  //   //         };
  //   //       });
  //   //       setAllGames(allFetchedGames as Game[]);
  //   //       setLocalStorageValue(JSON.stringify([{league: gameLinks[0].name, games:allFetchedGames}]));
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //   });
  //   // }
  //   Promise.all(
  //     gameLinks[0].gameIds.slice(0,8).map(gameId =>
  //       fetch(`http://localhost:3001/parseGame`, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'url': gameLinks[0].link,
  //           'gameid': gameId
  //         }
  //       })
  //       .then(res => res.json())
  //     )
  //   ).then(gameBodies => {
  //       const allFetchedGames = gameBodies.map(bodyContent => {
  //         const game = intialGameParse(bodyContent.actions);
  //         return {
  //           date: bodyContent.date,
  //           actions: bodyContent.actions,
  //           homeTeam: game[0],
  //           awayTeam: game[1],
  //           stats: {
  //             "PTS": -1, "REB": -1, "AST":-1,
  //             "STL": -1, "BLK": -1, "TO": -1,
  //             "3PM": -1, "3PA": -1, 
  //             "FGM":  -1, "FGA": -1,
  //             "FTA": -1, "FTM": -1,
  //             "FAN": -1
  //           },
  //         };
  //       });
  //       setAllGames(allFetchedGames as Game[]);
  //       setLocalStorageValue(JSON.stringify([{league: gameLinks[0].name, games:allFetchedGames}]));
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }, []);

  useEffect(() => {
    // const fetchGames = async () => {
    //   const games = await betterLoadGames('WNBA', new Date('May 5, 2024'), 'C. Clark');
      
    //   setAllGames(games); // Example of setting games to state
    // };
  
    // fetchGames();
  }, []);

  // if(allGames.length === 0) return <div>Loading</div>

  return (
    <Router>
        <NavBar />
        {/* <TicketPopUp /> */}
        {/* <button style={{width:'100px', height:'100px', background:'#fff', color:'#000'}} onClick={() => setLocalStorageValue('steop')}>
          <p>set</p>
        </button> */}
        {/* <button style={{width:'100px', height:'100px', background:'#fff'}} onClick={()=> getLoadedGamesCookie()}>get</button> */}

        <Routes>

            <Route path="/player/:paramLeague/:paramName" element={
              <Player 
                allGamesLoaded={allGamesLoaded} 
                setAllGames={setAllGames}
                setAllGamesLoaded={setAllGamesLoaded}
                allGames={allGames}
                useLocalStorage={useLocalStorage}
              />
            } />

            <Route path="/" element={
              <Trending />
            } />

            <Route path="*" element={<Missing />} />
        </Routes>
    </Router>
  );
}

export default App;