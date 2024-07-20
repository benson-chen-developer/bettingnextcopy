const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
app.use(cors());

/*
    - Parses JSON file with all the actions
    - Returns elements that we can loop through and add a stat via each one
        (Example: 3PT Made is 5 elements 
            - PTS +3 
            - 3PA +1
            - 3PM +1
            - FGA +1
            - FGM +1
        )
    - Element name should be same as one in our dictionary so we can just put it in the slot
*/
app.get("/parseGame", async (req, res) => {
    try {
        const apiToCall = req.headers.url.replace('urlMe', req.headers.gameid);
        const axiosResponse = await axios.get(apiToCall);
        const gameDate = axiosResponse.data.meta.time.split(" ")[0]; /* Game is ahead by 1 day for some reason */
        const subOneDay = new Date(gameDate);
        subOneDay.setDate(subOneDay.getDate() - 1);

        const actions = axiosResponse.data.game.actions;
        
        const parsedActions = [];

        actions.forEach((action) => {
            if(action.actionType === '2pt' || action.actionType === '3pt') {
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "PTS",
                    picId: action.personIdsFilter[0],
                    amount: action.shotResult === "Made" ? parseInt(action.actionType.charAt(0)) : 0
                });
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    picId: action.personIdsFilter[0],
                    teamTricode: action.teamTricode,
                    actionType: 'FGA',
                    amount: 1
                });
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: 'FGM',
                    picId: action.personIdsFilter[0],
                    amount: action.shotResult === "Made" ? 1 : 0
                });
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "3PA",
                    picId: action.personIdsFilter[0],
                    amount: action.actionType === '3pt' ? 1 : 0
                });
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    picId: action.personIdsFilter[0],
                    teamTricode: action.teamTricode,
                    actionType: '3PM',
                    amount: action.actionType === '3pt' && action.shotResult === "Made" ? 1 : 0
                });
            } 
            if(action.actionType === 'rebound' && action.qualifiers.length === 0) {
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    picId: action.personIdsFilter[0],
                    teamTricode: action.teamTricode,
                    actionType: "REB",
                    amount: 1
                });
            }
            if (action.assistPlayerNameInitial !== undefined) {
                parsedActions.push({
                    name: action.assistPlayerNameInitial,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    picId: action.assistPersonId,
                    actionType: "AST",
                    amount: 1
                });
            } 
            if (action.actionType === "freethrow") {
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "FTA",
                    amount: 1,
                    picId: action.personIdsFilter[0],
                });
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "FTM",
                    amount: action.shotResult === "Made" ? 1 : 0,
                    picId: action.personIdsFilter[0],
                });
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "PTS",
                    amount: action.shotResult === "Made" ? 1 : 0,
                    picId: action.personIdsFilter[0],
                });
            } 
            if (action.actionType === "steal") {
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "STL",
                    amount: 1,
                    picId: action.personIdsFilter[0],
                });
            } 
            if (action.actionType === "block") {
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "BLK",
                    amount: 1,
                    picId: action.personIdsFilter[0],
                });
            } 
            if (action.actionType === "turnover") {
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "TO",
                    amount: 1,
                    picId: action.personIdsFilter[0],
                });
            }
            if (action.actionType === "foul") {
                parsedActions.push({
                    name: action.playerNameI,
                    period: action.period,
                    clock: action.clock,
                    teamTricode: action.teamTricode,
                    actionType: "PF",
                    amount: 1,
                    picId: action.personIdsFilter[0],
                });
            }
        });

        res.json({
            actions: parsedActions,
            date: subOneDay,
            teams: getTeamNames(axiosResponse.data.game.actions)
        });
    } catch (err) {
        // console.log("Error fetching data:", err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/mlbSchedule', async (req, res) => {
    const startDate = req.headers.startdate;
    const endDate = req.headers.enddate;
    const url = ` https://statsapi.mlb.com/api/v1/schedule?sportId=1&startDate=${startDate}&endDate=${endDate}&timeZone=America/New_York&gameType=E&&&gameType=R&&gameType=A&language=en`;
    
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'startDate': startDate,
                'endDate': endDate,
                'sportId': 1,
                'timeZone': 'America/New_York',
                'gameType': 'R'
            }
        });
        // console.log('Received MLB schedule request', response);

        if (!response.ok) {
            throw new Error(`Failed to fetch schedule: ${response.statusText}`);
        }

        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error('Error fetching MLB schedule:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/wnbaScedule', async (req, res) => {
    try {
        const response = await fetch('https://cdn.wnba.com/static/json/staticData/scheduleLeagueV2_1.json');
        if (!response.ok) {
            throw new Error(`Failed to fetch schedule: ${response.statusText}`);
        }

        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.error('Error fetching WNBA schedule:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
})

app.get("/getPlayersInGame/:urlId", async (req, res) => {
    try {
        const apiUrl = 'https://content-api-prod.nba.com/public/1/leagues/wnba/game/' + req.params.urlId;
        const axiosResponse = await axios.get(apiUrl);
        const parsedRes = axiosResponse.data;

        res.json(parsedRes);
    } catch (err) {
        // console.log("Error fetching data:", err);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

/*
    1629483,     'Collier',
    'Napheesa',  'napheesa-collier',
    1611661324,  'lynx',
    'Minnesota', 'Lynx',
    'MIN',       '24',
    'F',         '6-1',
    '173',       'Connecticut',
    'USA',       2019,
    1,           6,
    1,           '2019',
    '2024',      pts 20,
    reb 10.2,        ast 3.7,
    'Season'
*/
app.get("/allPlayers", async (req, res) => {
    try {
        const axiosResponse = await axios.get('https://www.wnba.com/players?team=all&position=all&show-historic-players=fal');
        const html = axiosResponse.data;
        const $ = cheerio.load(html);
    
        const scriptContent = $('#__NEXT_DATA__').html();
        const jsonData = JSON.parse(scriptContent);
        const allPlayersData = jsonData.props.pageProps.allPlayersData;
        
        let playerArr = [];
        allPlayersData.forEach(data => {
            playerArr.push({
                picId: data[0],
                lastName: data[1],
                firstName: data[2],
                city: data[6],
                team: data[7],
                abbr: data[8],
                position: data[10],
                number: data[9],
                ppg: data[21],
                rpg: data[22],
                apg: data[23]
            })
        })        
        
        res.json(playerArr);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
})

app.get('/valorant/getAllPlayers', async (req, res) => {
    try {
        const axiosResponse = await axios.get('https://www.vlr.gg/stats');
        const axiosHtml = axiosResponse.data;
        
        const $ = cheerio.load(axiosHtml);

        let playersArr = [];
        $('tbody tr').each((index, element) => {
            const playerLink = $(element).find('.mod-player a').attr('href');
            const playerId = playerLink ? playerLink.split('/')[2] : null;

            const playerData = {
                id: playerId,
                name: $(element).find('.mod-player .text-of').text().trim(),
                firstName: $(element).find('.mod-player .text-of').text().trim(),
                lastName: '',
                picId: '',
                rnd: parseInt($(element).find('.mod-rnd').text().trim(), 10),
                r: parseFloat($(element).find('.mod-color-sq').eq(0).text().trim()),
                acs: parseFloat($(element).find('.mod-color-sq.mod-acs').text().trim()),
                kd: parseFloat($(element).find('.mod-color-sq').eq(2).text().trim()),
                kast: $(element).find('.mod-color-sq').eq(3).text().trim(),
                adr: parseFloat($(element).find('.mod-color-sq').eq(4).text().trim()),
                kpr: parseFloat($(element).find('.mod-color-sq').eq(5).text().trim()),
                apr: parseFloat($(element).find('.mod-color-sq').eq(6).text().trim()),
                fkpr: parseFloat($(element).find('.mod-color-sq').eq(7).text().trim()),
                kdpr: parseFloat($(element).find('.mod-color-sq').eq(8).text().trim()),
                hs: $(element).find('.mod-color-sq').eq(9).text().trim(),
                cl: $(element).find('.mod-cl').text().trim(),
                k: parseInt($(element).find('td').eq(14).text().trim(), 10),
                d: parseInt($(element).find('td').eq(15).text().trim(), 10),
                a: parseInt($(element).find('td').eq(16).text().trim(), 10),
                fk: parseInt($(element).find('td').eq(17).text().trim(), 10),
                fd: parseInt($(element).find('td').eq(18).text().trim(), 10),
                team:  $(element).find('div.stats-player-country').text().trim()
            };
            playersArr.push(playerData);
        });

        res.json(playersArr);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

app.get("/valorant/:id/:username", async (req, res) => {
    if(req.params.id === undefined || req.params.username === undefined) res.error(500, "The name or id is undefined");

    const axiosResponse = await axios.get(`https://www.vlr.gg/player/matches/${req.params.id}/${req.params.username}`);
    const axiosHtml = axiosResponse.data;
    const $ = cheerio.load(axiosHtml);

    let matches = [];
    $('div.mod-dark').children('div').each((index, element) => {
        const match = {};
        
        // Gets the url link
        const aTag = $(element).find('a').attr('href');
        if (aTag) {
            match.url = aTag;
        }

        // Gets the opposing team
        const teamTags = $(element).find('span.m-item-team-tag');
        if (teamTags.length > 1) {
            match.oppTeam = $(teamTags[1]).text().trim();
        }

        // Get the date
        const dateDiv = $(element).find('div.m-item-date');
        if (dateDiv.length > 0) {
            const date = dateDiv.children('div').first().text().trim();
            match.date = date;
        }

        matches.push({...match, players: [], maps: []});
    });

    res.json(matches);
})

/*
    mapId is a number or all for all 3 maps
*/
app.get("/valorant/game", async (req, res) => {
    const axiosResponse = await axios.get(`https://www.vlr.gg${req.headers["url"]}`);
    const axiosHtml = axiosResponse.data;
    const $ = cheerio.load(axiosHtml);

    const maps = [];
    $('div[style="margin-bottom: 2px; text-align: center; line-height: 1.5;"]').each((index, element) => {
        const fullText = $(element).text().trim();
        const words = fullText.split(/\s+/);
        const lastWord = words[words.length - 1]; /* This is the name of the map */

        maps.push(lastWord);
    });


    /* 
        There are 4 maps (all, map1, map2, map3). Each map is in one tbody
            - each tr is a player with there stats
            - each stat will be all, attack, or def
    */
    const playersMap = new Map();
    $('tbody').each((tbodyIndex, tbodyElement) => {
        // Loop through each tr within the current tbody
        $(tbodyElement).find('tr').each((trIndex, trElement) => {
            const playerName = $(trElement).find('div.text-of').first().text().trim(); /* Name */
            const team = $(trElement).find('div.ge-text-light').first().text().trim(); /* Team */

            let kills = [0, 0, 0];
            const killsTd = $(trElement).find('td.mod-stat.mod-vlr-kills').first(); /* Kills */
            if (killsTd.length) {
                const spans = killsTd.find('span.side');
                kills[0] = parseInt(spans.filter('.mod-both').text().trim()) || 0;
                kills[1] = parseInt(spans.filter('.mod-t').text().trim()) || 0;
                kills[2] = parseInt(spans.filter('.mod-ct').text().trim()) || 0;
            }

            let deaths = [0, 0, 0];
            const deathsTd = $(trElement).find('td.mod-stat.mod-vlr-deaths').first(); /* Deaths */
            if (deathsTd.length) {
                const spans = deathsTd.find('span.side');
                deaths[0] = parseInt(spans.filter('.mod-both').text().trim()) || 0;
                deaths[1] = parseInt(spans.filter('.mod-t').text().trim()) || 0;
                deaths[2] = parseInt(spans.filter('.mod-ct').text().trim()) || 0;
            }

            let assists = [0, 0, 0];
            const assistsTd = $(trElement).find('td.mod-stat.mod-vlr-assists').first(); /* Assists */
            if (assistsTd.length) {
                const spans = assistsTd.find('span.side');
                assists[0] = parseInt(spans.filter('.mod-both').text().trim()) || 0;
                assists[1] = parseInt(spans.filter('.mod-t').text().trim()) || 0;
                assists[2] = parseInt(spans.filter('.mod-ct').text().trim()) || 0;
            }

            // If the player already exists, update their stats
            if (playersMap.has(playerName)) {
                const existingPlayer = playersMap.get(playerName);
                existingPlayer.kills = [...existingPlayer.kills, ...kills];
                existingPlayer.deaths = [...existingPlayer.deaths, ...deaths];
                existingPlayer.assists = [...existingPlayer.assists, ...assists];
            } else {
                // Otherwise, add a new entry for the player
                playersMap.set(playerName, {
                    name: playerName,
                    team: team,
                    kills: kills,
                    deaths: deaths,
                    assists: assists
                });
            }
        });
    });

    /* If kills/assists/deaths is less than length 12 then that means not all 3 maps were played so we append 0,0,0 */
    const players = Array.from(playersMap.values());
    const ensureLength = (arr, length, fillValue) => {
        while (arr.length < length) {
            arr.push(fillValue);
        }
        return arr;
    };
    players.forEach(player => {
        player.kills = ensureLength(player.kills, 12, 0);
        player.deaths = ensureLength(player.deaths, 12, 0);
        player.assists = ensureLength(player.assists, 12, 0);
    });

    res.json({
        players: players, maps: maps
    });
})


const getTeamNames = (actions) => {
    let teamNames = [];
    let i = 0;

    while(teamNames.length < 2){
        let currentAction = actions[i];

        if(currentAction.teamTricode){
            const teamTriCode = teamNames.find(teamName => teamName === currentAction.teamTricode);
            if(teamTriCode === undefined){
                teamNames.push(currentAction.teamTricode)
            }
        }

        i++;
    }

    return teamNames;
}

app.listen(3001, () => {
    console.log("Server is on 3001");
});