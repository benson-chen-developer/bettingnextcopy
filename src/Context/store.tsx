'use client';
import React, { createContext, useContext, Dispatch, SetStateAction, useState, useEffect, ReactNode } from 'react';
import { Game2 } from '../functions/players';
import { LolPlayer, ValorantPlayer, WNBAPlayer } from './PlayerTypes';
import {apiUrl} from '../data/data';

interface ContextProps {
  players: WNBAPlayer[];
  setPlayers: Dispatch<SetStateAction<WNBAPlayer[]>>;
  games: Game2[],
  setGames: Dispatch<SetStateAction<Game2[]>>;
  valorantPlayers: ValorantPlayer[];
  setValorantPlayers:  Dispatch<SetStateAction<ValorantPlayer[]>>;
  fetchValorantPlayers: () => Promise<ValorantPlayer[]>;
  lolPlayers: LolPlayer[],
  setLolPlayers: Dispatch<SetStateAction<LolPlayer[]>>,
  fetchLolPlayers: () => Promise<LolPlayer[]>
}

const GlobalContext = createContext<ContextProps>({
  players: [],
  setPlayers: (): WNBAPlayer[] => [],
  games: [],
  setGames: (): Game2[] => [],
  valorantPlayers: [],
  setValorantPlayers:  (): ValorantPlayer[] => [],
  fetchValorantPlayers: async (): Promise<ValorantPlayer[]> => [],
  lolPlayers: [],
  setLolPlayers:  (): LolPlayer[] => [],
  fetchLolPlayers: async (): Promise<LolPlayer[]> => [] 
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<WNBAPlayer[]>([]);
  const [valorantPlayers, setValorantPlayers] = useState<ValorantPlayer[]>([]);
  const [lolPlayers, setLolPlayers] = useState<LolPlayer[]>([]);
  const [games, setGames] = useState<Game2[]>([]);

  const fetchPlayers = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/allPlayers`);
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/valorant/getAllPlayers`);
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

  const fetchLolPlayers = async (): Promise<LolPlayer[]> => {
    if(lolPlayers.length > 0){
      console.log("Cached Lol");
      return lolPlayers;
    } else {
      try {
        console.log("Not Cached Lol");
        const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/lol/allPlayers`);
        if (!response.ok) throw new Error('Failed to fetch Lol players');

        const data = await response.json();
        setLolPlayers(data);
        return data;
      } catch (error) {
        console.error('Error fetching Lol players:', error);
        return [];
      }
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <GlobalContext.Provider value={{ 
      players, setPlayers, 
      valorantPlayers, setValorantPlayers, fetchValorantPlayers,
      lolPlayers, setLolPlayers, fetchLolPlayers,
      games, setGames, 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
