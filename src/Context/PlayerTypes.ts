export type WNBAPlayer = {
    picId: number;
    lastName: string;
    firstName: string;
    city: string;
    team: string;
    abbr: string;
    position: string;
    number: string;
    ppg: number;
    rpg: number;
    apg: number;
};

export type ValorantPlayer = {
    id: string,
    name: string,
    firstName: string,
    lastName: string,
    picId: string,
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
        assists: number[]
    }[],
    maps: string[]
}