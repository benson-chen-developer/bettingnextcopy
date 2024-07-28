import { Dispatch, SetStateAction, useEffect } from "react";

interface SportBtnProps {
    sport: string,
    dropDown: string,
    setDropDown: Dispatch<SetStateAction<string>>,
}

export const currentAllSports = ["WNBA", "Valorant", "LOL"];

export const LeagueIcon = ({ sport, size }: { sport: string, size: string }) => {
  if (sport.toLowerCase() === "wnba") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32">
        <path fill="#fff" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m11.95 13h-5.91a14.4 14.4 0 0 1 2.738-7.153A11.94 11.94 0 0 1 27.95 15M17 15V4.05a11.9 11.9 0 0 1 6.287 2.438A16.27 16.27 0 0 0 20.04 15Zm-2 0h-3.04a16.27 16.27 0 0 0-3.247-8.512A11.9 11.9 0 0 1 15 4.051Zm0 2v10.95a11.9 11.9 0 0 1-6.287-2.438A16.27 16.27 0 0 0 11.96 17Zm2 0h3.04a16.27 16.27 0 0 0 3.248 8.512A11.9 11.9 0 0 1 17 27.949ZM7.22 7.847A14.4 14.4 0 0 1 9.96 15H4.051a11.94 11.94 0 0 1 3.17-7.153M4.05 17h5.91a14.4 14.4 0 0 1-2.738 7.153A11.94 11.94 0 0 1 4.05 17m20.73 7.153A14.4 14.4 0 0 1 22.04 17h5.908a11.94 11.94 0 0 1-3.17 7.153" />
      </svg>
    );
  }
  
  if (sport.toLowerCase() === "valorant") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 14H19l2-2V6zM9 19h5L3 6v6z" />
      </svg>
    );
  }

  if (sport.toLowerCase() === "lol") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <path fill="#fff" d="m1.912 0l1.212 2.474v19.053L1.912 24h14.73l1.337-4.682H8.33V0ZM12 1.516c-.913 0-1.798.112-2.648.312v1.74A9.7 9.7 0 0 1 12 3.2c5.267 0 9.536 4.184 9.536 9.348a9.2 9.2 0 0 1-2.3 6.086l-.273.954l-.602 2.112c2.952-1.993 4.89-5.335 4.89-9.122C23.25 6.468 18.213 1.516 12 1.516m0 2.673c-.924 0-1.814.148-2.648.414v13.713h8.817a8.25 8.25 0 0 0 2.36-5.768c0-4.617-3.818-8.359-8.529-8.359M2.104 7.312A10.86 10.86 0 0 0 .75 12.576c0 1.906.492 3.7 1.355 5.266z" />
      </svg>
    );
  }

  return null;
};

export const SportBtn: React.FC<SportBtnProps> = ({ dropDown, setDropDown, sport }) => {
  const handleSportSelect = () => {
    setDropDown(p => p === "sports" ? "" : "sports");
  };

  /* To handle closing the drop down when clicking somewhere on the screen */
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.sport-dropdown') && dropDown !== 'players') {
        setDropDown('');
    }
  };
  useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, [dropDown]);

    return (
      <div style={{ position: 'relative', width:'22%' }} className="sport-dropdown">
        <button 
          onClick={() => handleSportSelect()} 
          style={{
            width: '95%', height: "90%", borderRadius: 10,
            background: '#000', border: 'none', 
            display: 'flex', justifyContent: 'space-around', alignItems: 'center',
            margin: 3, cursor: 'pointer'
          }} 
          type="button"
        >
          <LeagueIcon sport={sport} size="15px"/>
  
          <p style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>
            {sport}
          </p>
  
          {/* Up/Down Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 48 48"
            style={{
                transform: dropDown === "sports" ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease', // Optional: adds a smooth transition
            }}
           >
            <path fill="#fff" stroke="#fff" stroke-linejoin="round" strokeWidth="4" d="m12 29l12-12l12 12z" />
          </svg>
  
        </button>
      </div>
    );
};