export const getTodaysPlayers = async (league: string): Promise<any[]> => {

    /*
        We get the current day and return all the games that are not gameStatusText === 'Final'
    */
    const findClosestFutureDate = (wnbaData: any) => {
        const today = new Date().toISOString().split('T')[0]; 
        
        for(let i=0; i<wnbaData.length; i++){
            if(new Date(wnbaData[i].gameDate).toISOString().split('T')[0] >= today){
                let closetDateGames = wnbaData[i].games;

                //Find the dates that is closet to today and the games that are not done
                closetDateGames = closetDateGames.filter((game: any) => game.gameStatusText !== 'Final')

                //If all games are finished then we can get tmr's game
                if(closetDateGames.length === 0){
                    return wnbaData[i+1];
                } else {
                    return closetDateGames;
                }
            }
        }
    }

    if(league === "WNBA"){
        //Get the Schedule
        const wnbaData = await fetch('http://localhost:3001/wnbaScedule');
        const parsedData = await wnbaData.json();
        const games = parsedData.leagueSchedule.gameDates;
        
        //Find the dates that is closet to today and the games that are not done
        let closetDateGames = findClosestFutureDate(games);

        /* Sometimes this returns an array and sometimes it returns 
            gameDate: "07/14/2024 00:00:00"
            games : (4) [{…}, {…}, {…}, {…}] as an obj

            so we have to make sure it always returns a games array
        */
        if (Array.isArray(closetDateGames)) { 
            return closetDateGames;
        } else {
            return closetDateGames.games;
        }
    }

    return [];
}