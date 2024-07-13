'use client';
import React, { createContext, useContext, Dispatch, SetStateAction, useState, useEffect, ReactNode } from 'react';
import { Game2 } from '../functions/players';

export type PlayerType = {
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

interface ContextProps {
  players: PlayerType[];
  setPlayers: Dispatch<SetStateAction<PlayerType[]>>;
  games: Game2[],
  setGames: Dispatch<SetStateAction<Game2[]>>;
}

const GlobalContext = createContext<ContextProps>({
  players: [],
  setPlayers: (): PlayerType[] => [],
  games: [],
  setGames: (): Game2[] => []
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const [games, setGames] = useState<Game2[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('http://localhost:3001/allPlayers');
        if (!response.ok) {
          throw new Error('Failed to fetch players');
        }
        const data = await response.json();

        setPlayers(data);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <GlobalContext.Provider value={{ players, setPlayers, games, setGames }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);