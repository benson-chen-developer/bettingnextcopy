import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../Context/store';
import { StatComparator } from './Componenets/StatComparator';
import { Hero } from './Componenets/Hero';
import { TableHeader } from './Componenets/TableHeader';
import { Row } from './Componenets/Row';
import { NotFound } from './Componenets/NotFound';
import { EGame, Game, LolGame, PGame, PlayerType } from '../../Context/PlayerTypes';
import { WNBA } from './Leagues/WNBA';
import { CS } from './Leagues/CS';
import { Valorant } from './Leagues/Valorant';
import { League } from './Leagues/League';
import { Rainbow } from './Leagues/Rainbow';

export const PlayerPage = () => {
    const router = useRouter();
    const { paramPlayer, paramLeague } = router.query;
    const firstName = (paramPlayer! as string).split('_')[0];
    const lastName = (paramPlayer! as string).split('_')[1];
    const {
        fetchWnbaPlayer, fetchCSPlayers, fetchValorantPlayers,
        fetchLolPlayers, fetchRainbowPlayers
    } = useGlobalContext();

    /* Player Page States */
    const [player, setPlayer] = useState<PlayerType | undefined>(undefined);
    const [pickedBtn, setPickedBtn] = useState<string>("")
    const [allPickedBtns, setAllPickedBtns] = useState<string[]>([]);
    const [statsHeader, setStatsHeader] = useState<{name: string, underName: string}[]>([]);
    const [displayedRows, setDisplayedRows] = useState<number[][]>([]);
    const [pGames, setPGames] = useState<PGame[]>([]);
    const [eGames, setEGames] = useState<EGame[]>([]);
    const [lolGames, setLolGames] = useState<LolGame[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [compareTo, setCompareTo] = useState<string[]>([])
    
    const findUrlPlayer = (players: PlayerType[]): PlayerType | null => {
        let foundPlayer: PlayerType | null = null;
    
        if (firstName && lastName) {
            foundPlayer = players.find(player => player.firstName === firstName && player.lastName === lastName) || null;
        } else if (firstName && !lastName) {
            foundPlayer = players.find(player => player.firstName === firstName) || null;
        }
    
        return foundPlayer;
    }

    useEffect(() => {
        const fetchData = async () => {
            if ((paramLeague as string).toLowerCase() === "wnba") {
                const players = await fetchWnbaPlayer();
                const foundPlayer = findUrlPlayer(players)

                if(foundPlayer) {
                    const allGames = await WNBA.fetchMatches(foundPlayer!);
                    const rows = WNBA.compareFunction(WNBA.allPickedBtns[0], allGames, foundPlayer.firstName, foundPlayer.lastName);
                    setDisplayedRows(rows)
                    setPlayer(foundPlayer);
                    setStatsHeader(WNBA.statsHeader);
                    setCompareTo(Array(WNBA.statsHeader.length).fill(""));
                    setAllPickedBtns(WNBA.allPickedBtns);
                    setPickedBtn(WNBA.allPickedBtns[0]);
                    setPGames(allGames);
                }
            }
            else if ((paramLeague as string).toLowerCase() === "cs") {
                const players = await fetchCSPlayers();
                const foundPlayer = findUrlPlayer(players)

                if(foundPlayer) {
                    const allGames = await CS.fetchMatches(foundPlayer!);
                    const rows = CS.compareFunction(CS.allPickedBtns[0], allGames, foundPlayer.firstName);
                    setDisplayedRows(rows)
                    setPlayer(foundPlayer);
                    setStatsHeader(CS.statsHeader);
                    setCompareTo(Array(CS.statsHeader.length).fill(""));
                    setAllPickedBtns(CS.allPickedBtns);
                    setPickedBtn(CS.allPickedBtns[0]);
                    setEGames(allGames);
                }
            }
            else if ((paramLeague as string).toLowerCase() === "valorant") {
                const players = await fetchValorantPlayers();
                const foundPlayer = findUrlPlayer(players)

                if(foundPlayer) {
                    const allGames = await Valorant.fetchMatches(foundPlayer!);
                    const rows = Valorant.compareFunction(Valorant.allPickedBtns[0], allGames, foundPlayer.firstName);
                    setDisplayedRows(rows)
                    setPlayer(foundPlayer);
                    setStatsHeader(Valorant.statsHeader);
                    setCompareTo(Array(Valorant.statsHeader.length).fill(""));
                    setAllPickedBtns(Valorant.allPickedBtns);
                    setPickedBtn(Valorant.allPickedBtns[0]);
                    setEGames(allGames as EGame[]);
                }
            }
            else if ((paramLeague as string).toLowerCase() === "rainbow") {
                const players = await fetchRainbowPlayers();
                const foundPlayer = findUrlPlayer(players)

                if(foundPlayer) {
                    const allGames = await Rainbow.fetchMatches(foundPlayer!);
                    const rows = Rainbow.compareFunction(Rainbow.allPickedBtns[0], allGames, foundPlayer.firstName,);

                    setPlayer(foundPlayer);
                    setDisplayedRows(rows!)
                    setStatsHeader(Rainbow.statsHeader);
                    setCompareTo(Array(Rainbow.statsHeader.length).fill(""));
                    setAllPickedBtns(Rainbow.allPickedBtns);
                    setPickedBtn(Rainbow.allPickedBtns[0]);
                    setEGames(allGames);
                }
            }
            else if ((paramLeague as string).toLowerCase() === "lol") {
                const players = await fetchLolPlayers();
                const foundPlayer = findUrlPlayer(players)

                if(foundPlayer) {
                    const allGames = await League.fetchMatches(foundPlayer!);
                    const rows = League.compareFunction(League.allPickedBtns[0], allGames);
                    const team = League.GetTeamName(allGames);

                    console.log(rows)
                    if(team) foundPlayer.team = team;
                    setPlayer(foundPlayer);
                    setDisplayedRows(rows!)
                    setStatsHeader(League.statsHeader);
                    setCompareTo(Array(League.statsHeader.length).fill(""));
                    setAllPickedBtns(League.allPickedBtns);
                    setPickedBtn(League.allPickedBtns[0]);
                    setEGames(League.convertToEGames(allGames))
                    setLolGames(allGames);
                }
            }

            setLoading(false);
        };
      
        fetchData();
      }, [paramLeague]);

    useEffect(() => {
        const league = (paramLeague as string).toLowerCase();

        if(league === "wnba") setDisplayedRows(WNBA.compareFunction(pickedBtn, pGames, firstName, lastName));
        else if(league === "cs") setDisplayedRows(CS.compareFunction(pickedBtn, eGames, firstName));
        else if(league === "valorant") setDisplayedRows(Valorant.compareFunction(pickedBtn, eGames, firstName));
        else if(league === "rainbow") setDisplayedRows(Rainbow.compareFunction(pickedBtn, eGames, firstName));
        else if(league === "lol") setDisplayedRows(League.compareFunction(pickedBtn, lolGames));
    }, [pickedBtn, setPickedBtn])

    if(!loading && player) return (
        <div>
            <Hero 
                playerName={`${player?.firstName as string} ${player?.lastName as string}`}
                picUrl={player!.picId}
                team={`${player?.team}`}
                number=''
                position=''
                // team={`${player?.city} ${player?.team}`}
                // number={player?.number}
                // position={player?.position}
                pickedBtn={pickedBtn}
                setPickedBtn={setPickedBtn}
                allPickedBtns={allPickedBtns}
            />

            <p className="playerPageGamesHeader">Games</p>

            <div className="tableWrapper">
                <table className='playerPageStatTable'>
                    <thead>
                        <StatComparator compareTo={compareTo} setCompareTo={setCompareTo} hasMaps={false}/>
                        <TableHeader statsHeader={statsHeader} hasMaps={false}/>
                    </thead>
                    <tbody className="rowTable">
                        {displayedRows.map((row, index) => {
                            const allGames = pGames.length > 0 ? pGames : eGames;

                            // Is in UTC so use UTC functions or else its gonna be behind
                            let dateObject = new Date(allGames[index].date);
                            let month = dateObject.getUTCMonth() + 1;
                            let day = dateObject.getUTCDate();
                            let year = dateObject.getUTCFullYear();
                            let formattedDate = `${month}/${day}/${year}`;
                            
                            return (
                                <Row 
                                    key={index} 
                                    compareTo={compareTo}
                                    displayedStats={row}
                                    team={allGames[index].team1 === player!.team ? allGames[index].team2 : allGames[index].team1}
                                    date={formattedDate}
                                    extraText=''
                                    showDNP='dont'
                                />
                            );
                        })}
                    </tbody>
                </table>

                <div className='rowBottomSpace'/> 
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
