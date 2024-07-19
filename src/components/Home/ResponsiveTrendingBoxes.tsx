import React from 'react';
import { TrendingBox } from './TrendingBox';
import { ClipLoader } from 'react-spinners';

interface Props {
    games: any[]
    homePlayersLoaded: boolean
}

const ResponsiveTrendingBoxes: React.FC<Props> = ({ games, homePlayersLoaded }) => {
    console.log(games)

    /* Will be loading since we are checking the teams which will always have players */
    if (!homePlayersLoaded) return (
        <div style={{ marginLeft: '50px', marginTop: '20px' }}>
            <ClipLoader
                color={'#fff'}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );

    /* All star games */
    if (homePlayersLoaded && games.length === 0) return (
        <div style={{ marginLeft: '50px', marginTop: '20px' }}>
            <h1 style={{color:'#fff'}}>No Games Currently</h1>
        </div>
    );

    return (
        <div className="trending-container">
            {games.map((game, index) => {
                // Extract starters (Players with Rank 1 are the starters?)
                const homeStarters = game.results.depthCharts[0].players.filter((player: any) => player.rank === "1");
                const awayStarters = game.results.depthCharts[1].players.filter((player: any) => player.rank === "1");

                return (
                    <React.Fragment key={index}>
                        {homeStarters
                            .map((starter: any, starterIndex: number) => (
                                <TrendingBox
                                    leagueName={"WNBA"}
                                    player={starter}
                                    key={`${index}-0-${starterIndex}`}
                                    game={game}
                                />
                            ))
                        }
                        {awayStarters
                            .map((starter: any, starterIndex: number) => (
                                <TrendingBox
                                    leagueName={"WNBA"}
                                    player={starter}
                                    key={`${index}-1-${starterIndex}`}
                                    game={game}
                                />
                            ))
                        }
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default ResponsiveTrendingBoxes;
