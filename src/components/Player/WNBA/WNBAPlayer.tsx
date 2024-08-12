import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../../Context/store';
import { StatComparator } from '../StatComparator';
import { Hero } from '../Hero';
import { EverythingLoaded } from '../EverythingLoaded';
import { TableHeader } from '../TableHeader';
import { Row } from '../Row';
import { NotFound } from '../NotFound';
import { WNBAAction, WNBAGame, WNBAPlayer } from '../../../Context/PlayerTypes';

export const WNBAPlayerPage = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const {fetchWnbaPlayer} = useGlobalContext();
    const [allPlayers, setAllPlayers] = useState<WNBAPlayer[]>([]);
    const [player, setPlayer] = useState<WNBAPlayer | undefined>(undefined);
    const firstName = (paramPlayer! as string).split('_')[0];
    const lastName = (paramPlayer! as string).split('_')[1];

    const [allGames, setAllGames] = useState<WNBAGame[]>([]);
    const [displayedRows, setDisplayedRows] = useState<number[][]>([]);
    
    const [allGamesLoaded, setAllGamesLoaded] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

    const allPickedBtns = ["Whole Game", "1st Half", "2nd Half", "1st Quarter", "2nd Quarter", "3rd Quarter", "4th Quarter"];
    const statsHeader = [
        {name: "PTS", underName: "Points"},
        {name: "REB", underName: "Rebounds"},
        {name: "AST", underName: "Assists"},
        {name: "STL", underName: "Steals"},
        {name: "BLK", underName: "Blocks"},
        {name: "TO", underName: "Turn Overs"},
        {name: "PF", underName: "Fouls"},
        {name: "FGM", underName: "Field Goals Made"},
        {name: "FGA", underName: "Field Goals Attempted"},
        {name: "3PM", underName: "3 Pointers Made"},
        {name: "3PA", underName: "3 Pointers Attempted"},
        {name: "FTM", underName: "Free Throws Made"},
        {name: "FTA", underName: "Free Throws Attempted"},
        {name: "FAN", underName: "Fantasy Score"},
    ];
    const [chartCompareTo, setChartCompareTo] = useState<number[]>(Array(statsHeader.length).fill(-1)); 
    const [pickedBtn, setPickedBtn] = useState<string>(allPickedBtns[0])

    const FantasyScoring = (stat: string, amount: number): number => {
        if(stat === "PTS") return 1*amount;
        else if(stat === "REB") return 1.2;
        else if(stat === "AST") return 1.5;
        else if(stat === "STL") return 3;
        else if(stat === "BLK") return 3;
        else if(stat === "TO") return -1;
        else return 0;
    }

    const compareFunction = (pickedBtn: string, allTheGames: WNBAGame[]): number[][] => {
        /*
            - condition can be Q1, Q2, Q3, Q4, H1, H2, W
            - playerName should be in C. Clark format
            - if playerName is "" then just get all stats
        */
        const fillStats = (playerName: string, condition: string, actions: WNBAAction[]): number[] => {
            let intialStats = {
                "PTS": 0, "REB": 0, "AST":0,
                "STL": 0, "BLK": 0, "TO": 0, "PF": 0,
                "FGM":  0, "FGA": 0,
                "3PM": 0, "3PA": 0, 
                "FTM": 0, "FTA": 0,
                "FAN": 0
            };
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
                    intialStats[action.actionType as keyof typeof intialStats] += action.amount;
                    intialStats["FAN"] += FantasyScoring(action.actionType as string, action.amount);
                }
            })
        
            //If did not play then we return -1 PTS so just don't show this game
            if(!didPlay) intialStats["PTS"] = -1;
        
            return [...Object.values(intialStats)];;
        }

        const allTheDisplayedStats: number[][] = [];
        allTheGames.forEach((game) => {
            allTheDisplayedStats.push(fillStats(`${firstName[0]}. ${lastName}`, pickedBtn, game.actions))
        })
        
        return allTheDisplayedStats;
    }

    useEffect(() => {
        const fetchPlayer = async () => {
            const allPlayers = await fetchWnbaPlayer();
            setAllPlayers(allPlayers);

            const foundPlayer = allPlayers.find(player => player.firstName.toLowerCase() === firstName.toLowerCase() && player.lastName.toLowerCase() === lastName.toLowerCase());
            if(foundPlayer){
                setPlayer(foundPlayer);
                const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/wnba/player/${foundPlayer.abbr}`);
                const allGames = await res.json();
                allGames.sort((a: WNBAGame, b: WNBAGame) => {
                    const dateA = new Date(a.date).getTime();
                    const dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                });

                setAllGames(allGames);
                setDisplayedRows(compareFunction('Whole Game', allGames)); 
            }
            setLoading(false);
        }

        if(paramLeague && paramPlayer) fetchPlayer();
    }, [])

    useEffect(() => {
        setDisplayedRows(compareFunction(pickedBtn, allGames));
    }, [pickedBtn, setPickedBtn])

    if(!loading && player) return (
        <div>
            <Hero 
                playerName={`${player?.firstName as string} ${player?.lastName as string}`}
                picUrl={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${player.picId}.png`}
                team={`${player?.city} ${player?.team}`}
                number={player?.number}
                position={player?.position}
                pickedBtn={pickedBtn}
                setPickedBtn={setPickedBtn}
                allPickedBtns={allPickedBtns}
            />

            <h1 style={{ marginLeft: '75px', marginBottom:'10px'}}>Games</h1>

            <div style={{display:'flex', marginLeft:'50px',flexDirection:'column', width:'100%', minHeight:'150px'}}>
                <table style={{ width: '50%', borderCollapse: "collapse"}}>
                    <thead>
                        <StatComparator chartCompareTo={chartCompareTo} setChartCompareTo={setChartCompareTo} />

                        <TableHeader statsHeader={statsHeader} />
                    </thead>
                    <tbody>
                        {displayedRows.map((row, index) => {
                            // Is in UTC so use UTC functions or else its gonna be behind
                            let dateObject = new Date(allGames[index].date);
                            let month = dateObject.getUTCMonth() + 1;
                            let day = dateObject.getUTCDate();
                            let year = dateObject.getUTCFullYear();
                            let formattedDate = `${month}/${day}/${year}`;
                            
                            return (
                                <Row 
                                    key={index} 
                                    chartCompareTo={chartCompareTo} 
                                    displayedStats={row}
                                    pickedBtn={pickedBtn} 
                                    team={allGames[index].team1 === player.abbr ? allGames[index].team2 : allGames[index].team1}
                                    date={formattedDate}
                                />
                            );
                        })}
                    </tbody>
                </table>

                <EverythingLoaded 
                    allLoaded={allGamesLoaded}
                    onClickFunction={() => {
                        const loadGames = async () => {
                        };
                
                        setLoading(true);
                        loadGames();
                    }}
                />
            </div>
        </div>
    )

    if(!loading && !player) return(
        <NotFound />
    )

    return <div style={{
        width:'100%', minHeight:'100vh', justifyContent:'center', alignItems:'center',
        display:'flex'
    }}>
        <ClipLoader
            color={'#000'}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
}
