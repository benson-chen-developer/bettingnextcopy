export type PlayerType = {
    firstName: string,
    lastName: string,
    picId: string
}

export type WNBAPlayer = PlayerType & {
    city: string;
    team: string;
    abbr: string;
    position: string;
    number: string;
    ppg: number;
    rpg: number;
    apg: number;
};

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
    team:string,
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
    team: string,
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
// tournament: 'LCS Summer 2024'