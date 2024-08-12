/*
    Player
        - Has the pic and avg stats BUT MOST IMPORTANT it has the match ids played

    Game
        - Has the the match data and player stats
        - From these player stats you have to find the player again and return it. Is confusing since this player is a diff
            type from the PlayerType
*/

export type PlayerType = {
    firstName: string,
    lastName: string,
    picId: string,
    team: string,
    playerId: string,
    sport: string
}

export type WNBAPlayer = PlayerType & {
    city: string;
    abbr: string;
    position: string;
    number: string;
    ppg: number;
    rpg: number;
    apg: number;
};
export type WNBAGame = {
    url: string,
    date: string,
    team1: string,
    team2: string,
    actions: WNBAAction[],
    id: string
};
export type WNBAAction = {
    name: string
    period: number,
    clock: string,
    teamTricode: string,
    actionType: String,
    amount: number,
    picId: number
}

export type ValorantPlayer = PlayerType & {
    id: string,
    name: string,
    rnd: number,
    r: number,
    acs: number,
    kd: number,
    kast: string,
    adr: number,
    kpr: number,
    apr: number,
    fkpr: number,
    kdpr: number,
    hs: string,
    cl: string,
    k: number,
    d: number,
    a: number,
    fk: number,
    fd: number,
}
export type ValorantGame = {
    url: string,
    oppTeam: string,
    date: string,
    players: {
        name: string,
        team: string,
        kills: number[],
        deaths: number[],
        assists: number[],
        firstKills: number[],
        firstDeaths: number[],
        headShots: number[]
    }[],
    maps: string[]
}

export type LolPlayer = PlayerType & {
    id: string,
    kills: string,
    deaths: string,
    assists: string,
}
export type LolGame = {
    champion: {name: string, number: string},
    url: string,
    scores: string[],
    date: string,
    tournament: string,
    game: string,
}
// champion: { name: 'KSante', number: '162' },
// result: 'Defeat',
// score: ['0/4/3', '3/3/3'],
// date: '2024-06-15',
// game: 'Cloud9 vs Dignitas',
// tournament: 'LCS Summer 2024''

export type CSPlayer = PlayerType & {
    teams: string[]
}
export type CSGame = {
    url: string,
    team1: string,
    team2: string,
    date: string,
    maps: {
        players: CSGamePlayer[]
    }[],
}
export type CSGamePlayer = {
    name: string,
    kills: string,
    headshots: string
    deaths: string,
    assists: string,
    team: string,
}