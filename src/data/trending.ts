export const getTodaysPlayers = async (league: string): Promise<any[]> => {
    const findClosestFutureDate = (wnbaData: any) => {
        const today = new Date().toISOString().split('T')[0]; 
    
        for(let i=0; i<wnbaData.length; i++){
            if(new Date(wnbaData[i].gameDate).toISOString().split('T')[0] >= today){
                return wnbaData[i];
            }
        }
    }

    if(league === "WNBA"){
        //Get the Schedule
        const wnbaData = await fetch('http://localhost:3001/wnbaScedule');
        const parsedData = await wnbaData.json();
        const games = parsedData.leagueSchedule.gameDates;

        //Find the dates that is closet to today and the games that are not done
        let closetDateGames = findClosestFutureDate(games).games;
        closetDateGames = closetDateGames.filter((game: any) => game.gameStatusText !== 'Final')
    
        return closetDateGames;
    }

    return [];
}