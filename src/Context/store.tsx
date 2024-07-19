'use client';
import React, { createContext, useContext, Dispatch, SetStateAction, useState, useEffect, ReactNode } from 'react';
import { Game2 } from '../functions/players';
import { ValorantPlayer, WNBAPlayer } from './PlayerTypes';

interface ContextProps {
  players: WNBAPlayer[];
  setPlayers: Dispatch<SetStateAction<WNBAPlayer[]>>;
  games: Game2[],
  setGames: Dispatch<SetStateAction<Game2[]>>;
  valorantPlayers: ValorantPlayer[];
  setValorantPlayers:  Dispatch<SetStateAction<ValorantPlayer[]>>;
  fetchValorantPlayers: () => Promise<ValorantPlayer[]>; // Updated type definition
}

const GlobalContext = createContext<ContextProps>({
  players: [],
  setPlayers: (): WNBAPlayer[] => [],
  games: [],
  setGames: (): Game2[] => [],
  valorantPlayers: [],
  setValorantPlayers:  (): ValorantPlayer[] => [],
  fetchValorantPlayers: async (): Promise<ValorantPlayer[]> => [] // Default empty function
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<WNBAPlayer[]>([]);
  const [valorantPlayers, setValorantPlayers] = useState<ValorantPlayer[]>([]);
  const [games, setGames] = useState<Game2[]>([]);

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

  const fetchValorantPlayers = async (): Promise<ValorantPlayer[]> => {
    if(valorantPlayers.length > 0){
      console.log("Cached Valorant");
      return valorantPlayers;
    } else {
      try {
        console.log("Not Cached Valorant");
        const response = await fetch('http://localhost:3001/valorant/getAllPlayers');
        if (!response.ok) throw new Error('Failed to fetch Valorant players');

        const data = await response.json();
        setValorantPlayers(data);
        return data;
      } catch (error) {
        console.error('Error fetching Valorant players:', error);
        return [];
      }
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <GlobalContext.Provider value={{ players, setPlayers, valorantPlayers, setValorantPlayers, games, setGames, fetchValorantPlayers }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
