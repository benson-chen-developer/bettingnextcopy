import React from 'react';
import { TrendingBox } from './TrendingBox';
import './TrendingBox.css';

interface Props {
    games: any[]
}
const ResponsiveTrendingBoxes: React.FC<Props>  = ({ games }) => {
    return (
        <div className="trending-container">
            {games.map((game, index) => (
                <React.Fragment key={index}>
                    {game.results.projectedStarters.teams[0].players
                        .filter((_: any, starterIndex: number) => starterIndex === 1 || starterIndex === 3)
                        .map((starter: any, starterIndex: number) => (
                            <TrendingBox
                                leagueName={"WNBA"}
                                player={starter}
                                key={`${index}-0-${starterIndex}`}
                                game={game}
                            />
                        ))
                    }
                    {game.results.projectedStarters.teams[1].players
                        .filter((_: any, starterIndex: number) => starterIndex === 1 || starterIndex === 3)
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
            ))}
        </div>
    );
};

export default ResponsiveTrendingBoxes;
