import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [round, setRound] = useState(0);

  return (
    <GameContext.Provider
      value={{
        isGameOver,
        setIsGameOver,
        gameScore,
        setGameScore,
        roundScore,
        setRoundScore,
        round,
        setRound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
