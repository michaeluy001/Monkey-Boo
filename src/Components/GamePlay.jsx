import Board from "./Board";

import { useState, useEffect } from "react";
import { GameStateProvider } from "./GameContext";
import Scoreboard from "./GamePlay-Scoreboard";

const GamePlay = () => {
  const [isBoardRunning, setBoardRunning] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [level, setLevel] = useState(1);

  const handleLevelUp = () => {
    setLevel(level + 1);
  };

  useEffect(() => {
    setBoard();
  }, [level]);

  const setBoard = () => {
    setTimeout(() => {
      setBoardRunning(true);
    }, 500);
  };

  const reset = () => {
    setBoardRunning(false);
  };

  const updateGameScore = (newScore) => {
    setGameScore((prev) => prev + newScore);
  };

  return (
    <>
      <GameStateProvider>
        <Scoreboard gameScore={gameScore} level={level} />
        {isBoardRunning && (
          <Board
            level={level}
            onLevelUp={handleLevelUp}
            onReset={reset}
            onGameScoreUpdate={updateGameScore}
            gameScore={gameScore}
          />
        )}
      </GameStateProvider>
    </>
  );
};

export default GamePlay;
