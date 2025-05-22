import { createContext, useContext, useState } from "react";


const GameContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] =useState(0);


  return (
    <GameContext.Provider value={{ isGameOver, setIsGameOver, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);