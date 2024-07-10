import React from 'react'
import { useNavigate } from 'react-router-dom';
import { black } from '../../data/colors'
import { TrendingPlayer } from './Trending';

interface Props {
    leagueName: string,
    player: TrendingPlayer,
    game: any
}

const boxSize = '175px'; const iconSize = '50px'
export const TrendingBox: React.FC<Props> = ({leagueName, player, game}) => {
    const navigate = useNavigate();
    
    const searchPlayer = (playerName: string, league: string) => {
        let parsedName = playerName.trim(); // Remove whitespace
        parsedName = parsedName.toLowerCase(); // Convert to lowercase
        let nameParts = parsedName.split(' '); // Split the name
    
        if (nameParts.length >= 2) { // Basically turn Cait Clark to C_Clark
          let firstName = nameParts[0];
          let lastName = nameParts[1];
          parsedName = `${firstName.charAt(0)}_${lastName}`;
        }
    
        if (playerName.trim()) {
          navigate(`/player/${league}/${parsedName.trim()}`);
        }
    }

    // console.log(player)
    const imgArr: { [key: string]: JSX.Element } = {
        "MLB": (
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24">
                <path fill="#fff" d="M12 2c-2.5 0-4.75.9-6.5 2.4c.5.41.91.87 1.3 1.36l1.09-.63l1 1.74l-1 .57c.56 1.09.93 2.29 1.06 3.56H10v2H8.95c-.13 1.27-.5 2.47-1.06 3.56l1 .57l-1 1.74l-1.09-.63c-.39.49-.8.95-1.3 1.36c1.75 1.5 4 2.4 6.5 2.4s4.75-.9 6.5-2.4c-.5-.41-.91-.87-1.31-1.36l-1.08.63l-1-1.74l1-.58A9.9 9.9 0 0 1 15.05 13H14v-2h1.05c.13-1.27.5-2.47 1.06-3.55l-1-.58l1-1.74l1.08.63c.4-.49.81-.95 1.31-1.36C16.75 2.9 14.5 2 12 2M4.12 5.85A9.94 9.94 0 0 0 2 12c0 2.32.79 4.45 2.12 6.15c.34-.28.64-.6.93-.93l-.62-.35l1-1.74l.73.43c.39-.79.66-1.65.77-2.56H6v-2h.93c-.11-.91-.38-1.77-.77-2.56l-.73.43l-1-1.74l.62-.35c-.29-.33-.59-.65-.93-.93m15.76 0c-.34.28-.64.6-.93.93l.62.35l-1 1.74l-.73-.43c-.39.79-.66 1.65-.77 2.56H18v2h-.93c.11.91.38 1.77.77 2.56l.73-.43l1 1.74l-.62.35c.29-.33.59-.65.93.93A9.94 9.94 0 0 0 22 12c0-2.32-.79-4.45-2.12-6.15" />
            </svg>
        ),
        "WNBA": (
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 256 256">
                <path fill="#fff" d="M63.6 46.39a103.5 103.5 0 0 1 52-21.65a4 4 0 0 1 4.45 4V120H95.7a103.77 103.77 0 0 0-32.32-67.56a4 4 0 0 1 .22-6.05M46 64.07a103.5 103.5 0 0 0-21.29 51.46a4 4 0 0 0 4 4.47h50.92a87.86 87.86 0 0 0-27.74-56.41a4 4 0 0 0-5.89.48m146.4-17.68a103.5 103.5 0 0 0-52-21.65a4 4 0 0 0-4.45 4V120h24.3a103.77 103.77 0 0 1 32.32-67.56a4 4 0 0 0-.17-6.05m38.86 69.14A103.5 103.5 0 0 0 210 64.07a4 4 0 0 0-5.86-.48A87.86 87.86 0 0 0 176.37 120h50.91a4 4 0 0 0 3.98-4.47M24.74 140.47A103.5 103.5 0 0 0 46 191.93a4 4 0 0 0 5.86.48A87.86 87.86 0 0 0 79.63 136H28.72a4 4 0 0 0-3.98 4.47M210 191.93a103.5 103.5 0 0 0 21.29-51.46a4 4 0 0 0-4-4.47h-50.92a87.86 87.86 0 0 0 27.74 56.41a4 4 0 0 0 5.89-.48M63.6 209.61a103.5 103.5 0 0 0 52 21.65a4 4 0 0 0 4.45-4V136H95.7a103.77 103.77 0 0 1-32.32 67.56a4 4 0 0 0 .22 6.05M160.3 136H136v91.28a4 4 0 0 0 4.45 4a103.5 103.5 0 0 0 52-21.65a4 4 0 0 0 .22-6.05A103.77 103.77 0 0 1 160.3 136" />
            </svg>
        ),
        "Soccer": (
            <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 48 48">
                <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4">
                    <path d="M17.817 4.98C7.31 8.39 1.57 19.677 4.98 30.176c3.41 10.498 14.698 16.247 25.196 12.838c10.508-3.41 16.247-14.698 12.838-25.196C39.603 7.309 28.315 1.57 17.817 4.98" />
                    <path d="m34 21l-10-8l-10 8l4 12h12zm0 0l9-3m-7 22l-6-7m-12 0l-6 7m2-19l-9-3m19-5V4" />
                </g>
            </svg>
        )
    }

    const convertToEST = (dateString: string) => {
        const date = new Date(dateString);
        date.setHours(date.getHours() + 4); //Is behind by 4hrs for some reason
    
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'America/New_York',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
    
        return date.toLocaleTimeString('en-US', options);
    };

    return (
        <div style={{
            width: boxSize,
            height: boxSize,
            background: '#4c2f39',
            border: '2px solid #fff',
            borderRadius: 20,
            display: 'flex', cursor:'pointer',
            justifyContent: 'space-evenly',
            alignItems: 'center', flexDirection:'column'
        }} onClick={() => {
            searchPlayer(`${player.firstName[0]}. ${player.lastName}`, leagueName);
        }}>
            {/* {imgArr[leagueName] || null} */}
            {player.wnbaId !== "" ? 
                <img src={`https://cdn.wnba.com/headshots/wnba/latest/1040x760/${player.wnbaId}.png`} 
                    style={{width:'80px', height:'60px'}}
                /> :
                <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 256 256">
                    <path fill="#fff" d="M63.6 46.39a103.5 103.5 0 0 1 52-21.65a4 4 0 0 1 4.45 4V120H95.7a103.77 103.77 0 0 0-32.32-67.56a4 4 0 0 1 .22-6.05M46 64.07a103.5 103.5 0 0 0-21.29 51.46a4 4 0 0 0 4 4.47h50.92a87.86 87.86 0 0 0-27.74-56.41a4 4 0 0 0-5.89.48m146.4-17.68a103.5 103.5 0 0 0-52-21.65a4 4 0 0 0-4.45 4V120h24.3a103.77 103.77 0 0 1 32.32-67.56a4 4 0 0 0-.17-6.05m38.86 69.14A103.5 103.5 0 0 0 210 64.07a4 4 0 0 0-5.86-.48A87.86 87.86 0 0 0 176.37 120h50.91a4 4 0 0 0 3.98-4.47M24.74 140.47A103.5 103.5 0 0 0 46 191.93a4 4 0 0 0 5.86.48A87.86 87.86 0 0 0 79.63 136H28.72a4 4 0 0 0-3.98 4.47M210 191.93a103.5 103.5 0 0 0 21.29-51.46a4 4 0 0 0-4-4.47h-50.92a87.86 87.86 0 0 0 27.74 56.41a4 4 0 0 0 5.89-.48M63.6 209.61a103.5 103.5 0 0 0 52 21.65a4 4 0 0 0 4.45-4V136H95.7a103.77 103.77 0 0 1-32.32 67.56a4 4 0 0 0 .22 6.05M160.3 136H136v91.28a4 4 0 0 0 4.45 4a103.5 103.5 0 0 0 52-21.65a4 4 0 0 0 .22-6.05A103.77 103.77 0 0 1 160.3 136" />
                </svg>
            }
            <p style={{ color: '#fff', margin:0, fontSize:'16px' }}>{game.results.home.abbr} v {game.results.visitor.abbr}</p>
            <p style={{ color: '#fff', margin:0, fontSize:'14px' }}>{convertToEST(game.results.easternTime)}</p>
            <h4 style={{ color: '#fff', margin:0 }}>{player.firstName} {player.lastName}</h4>
        </div>
    );
};