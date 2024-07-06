import { fillStats, Game, Game2, intialGameParse, Stats } from "../functions/players";
import { mlbParsing } from "./mlbParsing";
import wnbaData from './wnba.json';
import { wnbaParsing } from "./wnbaParsing";

const deadAction = {
    name: '',
    period: -1,
    clock: '',
    teamTricode: '',
    actionType: 'dead' as keyof Stats,
    amount: -1,
    picId: -1
}

export const gameLinks = [
    {
        name: 'WNBA', 
        link: 'https://cdn.wnba.com/static/json/liveData/playbyplay/playbyplay_urlMe.json',
        gameIds : [
            "1012400002",
            "1012400003",
            "1012400004",
            "1012400001",
            "1012400005",
            "1012400006",
            "1012400007",
            "1012400008",
            "1012400009",
            "1012400011",
            "1012400010",
            "1022400001",
            "1022400002",
            "1022400003",
            "1022400004",
            "1022400005",
            "1022400006",
            "1022400007",
            "1022400008",
            "1022400009",
            "1022400010",
            "1022400011",
            "1022400012",
            "1022400013",
            "1022400186" //This is not suppose to be here
          ]
           //May 19
    },
    {
        name: 'MLB', 
        link: 'https://www.espn.com/mlb/boxscore/_/gameId/urlMe',
        gameIds: [

        ]
    }
]

/* If a game returns null then that means that game hasn't happened yet */
export const loadGames = async (leagueName: string, startInclusive: number, endExclusive: number): Promise<Game[]> => {
    const league = gameLinks.find(g => g.name === leagueName);

    if (!league) {
        throw new Error(`League with name ${leagueName} not found`);
    }

    const gamePromises = league.gameIds.slice(startInclusive, endExclusive).map(gameId =>
        console.log(gameId)
        // fetch(`http://localhost:3001/parseGame`, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'url': league.link,
        //         'gameid': gameId
        //     }
        // })
        // .then(res => {
        //     if (!res.ok) {
        //         throw new Error(`Failed to fetch game with ID ${gameId}`);
        //     }
        //     return res.json();
        // })
    );

    try {
        const gameBodies = await Promise.all(gamePromises);

        const allFetchedGames = gameBodies.map((bodyContent: any) => {
            const game = intialGameParse(bodyContent.actions);
            return {
                date: bodyContent.date,
                actions: bodyContent.actions,
                homeTeam: game[0],
                awayTeam: game[1],
                stats: {
                    "PTS": -1, "REB": -1, "AST": -1,
                    "STL": -1, "BLK": -1, "TO": -1,
                    "3PM": -1, "3PA": -1, 
                    "FGM":  -1, "FGA": -1,
                    "FTA": -1, "FTM": -1,
                    "FAN": -1
                }
            };
        });

        return allFetchedGames;

    } catch (error) {
        console.error('Error loading games:', error);
        return [];
    }
}

export const getPercentLoaded = async (leagueName: string) => {
    const leagues = [
        {name: 'WNBA', amount: 1.5, start: new Date('May 5th, 2024')}
    ];

}

export const betterLoadGames = async (leagueName: string, startDate: Date, endDate: Date, paramName: string): Promise<Game2[]> => {
    let newGames: Game2[] = [];

    if(leagueName === 'WNBA'){
        newGames = await wnbaParsing(startDate, endDate, paramName);
    }
    else if(leagueName === 'MLB'){
        newGames = await mlbParsing(startDate, endDate, paramName);
    }
    
    return newGames;
}

