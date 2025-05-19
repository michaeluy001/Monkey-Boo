import { createContext, useContext, useState } from "react";


const GameContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <GameContext.Provider value={{ isGameOver, setIsGameOver }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);