export type Action = {
    name: string
    period: number,
    clock: string,
    teamTricode: string,
    actionType: keyof Stats, //string
    amount: number,
    picId: number
}

export type Stats = {
    "PTS": number, "REB": number, "AST":number,
    "STL": number, "BLK": number, "TO": number,
    "3PM": number, "3PA": number, 
    "FGM":  number, "FGA": number,
    "FTA": number, "FTM": number,
    "FAN": number
}

export type Game = {
    date: string,
    homeTeam: Team,
    awayTeam: Team,
    stats: Stats,
    actions: Action[]
}
export type Game2 = {
    date: string,
    teams: [string, string],
    stats: Stats,
    actions: Action[]
}

type Team = {
    name: string,
    stats: Stats,
    players: string[]
    actions: Action[]
}

const FantasyScoring = (stat: string): number => {
    if(stat === "PTS") return 1;
    else if(stat === "REB") return 1.2;
    else if(stat === "AST") return 1.5;
    else if(stat === "STL") return 3;
    else if(stat === "BLK") return 3;
    else if(stat === "TO") return -1;
    else return 0;
}
export const emptyStats = {
    "PTS": 0, "REB": 0, "AST":0,
    "STL": 0, "BLK": 0, "TO": 0,
    "FGM":  0, "FGA": 0,
    "3PM": 0, "3PA": 0, 
    "FTM": 0, "FTA": 0,
    "FAN": 0
}

/*
    Gets the
        - 2 teams
        - all players on each team
        - and intial whole game stats 
            - (we loop through everything so it makes sense to might as well get this)
*/
export const intialGameParse = (actions: Action[]): Team[] => {
    let i = 0; let teams: Team[] = [];

    actions.forEach(action => {
        /* This is to find both teams */
        if(teams.length < 2){
            if(action.teamTricode){
                const teamTriCode = teams.find(team => team.name === action.teamTricode);
                if(teamTriCode === undefined){
                    teams.push({
                        name: action.teamTricode,
                        stats: {
                            "PTS": 0, "REB": 0, "AST":0,
                            "STL": 0, "BLK": 0, "TO": 0,
                            "3PM": 0, "3PA": 0, 
                            "FGM":  0, "FGA": 0,
                            "FTA": 0, "FTM": 0,
                            "FAN": 0
                        },
                        actions: actions,
                        players: []
                    })
                }
            }
            i++;
        }

        /* Add up the total stats for each team */
        const team = teams.find(t => t.name === action.teamTricode);
        if(team){
            team.stats[action.actionType] += action.amount;
            team.stats["FAN"] += FantasyScoring(action.actionType);
        }

        /* Find all the players on this team */
        let teamOfCurrentPlayer = teams.find(team => team.name === action.teamTricode);
        if(!teamOfCurrentPlayer?.players.find(p => p === action.name) && action.name){
            teamOfCurrentPlayer?.players.push(action.name);
        }
    })

    // console.log(teams)
    return teams;
}

/*
    condition can be Q1, Q2, Q3, Q4, H1, H2, W

    playerName should be in C. Clark format

    if playerName is "" then just get all stats
*/
export const fillStats = (playerName: string, condition: string, actions: Action[]): Stats => {
    let intialStats = {...emptyStats};
    let didPlay = false;

    actions.forEach(action => {
        /* This to see if the current action is what the player is looking for */
        let conditionMet = false; let playerConditionMet = false;

        if(condition === "1st Quarter" && action.period === 1) conditionMet = true;
        else if(condition === "2nd Quarter" && action.period === 2) conditionMet = true;
        else if(condition === "3rd Quarter" && action.period === 3) conditionMet = true;
        else if(condition === "4th Quarter" && action.period === 4) conditionMet = true;
        else if(condition === "1st Half" && (action.period === 1 || action.period === 2)) conditionMet = true;
        else if(condition === "2nd Half" && (action.period === 3 || action.period === 4)) conditionMet = true;
        else if(condition === "Whole Game") conditionMet = true;
        if(playerName.toLowerCase() === action?.name?.toLowerCase()) playerConditionMet = true;
        else if(playerName === "") playerConditionMet = true;

        if(conditionMet && playerConditionMet){
            didPlay = true;
            intialStats[action.actionType] += action.amount;
            intialStats["FAN"] += FantasyScoring(action.actionType);
        }
    })

    //If did not play then we return -1 PTS so just don't show this game
    if(!didPlay) intialStats["PTS"] = -1;

    return intialStats;
}