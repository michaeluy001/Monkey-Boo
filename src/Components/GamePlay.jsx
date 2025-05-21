import Board from "./Board";
import ReturnButton from "./ReturnButton";
import { useState, useEffect } from "react";
import { GameStateProvider } from "./GameContext";

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
  }

  const updateGameScore = (newScore) => {
    setGameScore(prev=> prev + newScore)
  }

  return (
    <>
      <GameStateProvider>
        <div className="h-15 bg-amber-200 content-center items-center justify-items-center px-5 grid grid-cols-3">
          <ReturnButton className="text-3xl" />
          <div className="text-center">Current Score {gameScore} </div>
          <div className="text-center flex flex-col"> <p>Level</p> <p>{level}</p> </div>
        </div>
        {isBoardRunning && (
          <Board level={level} onLevelUp={handleLevelUp} onReset={reset} onGameScoreUpdate={updateGameScore} gameScore={gameScore}/>
        )}
      </GameStateProvider>
    </>
  );
};

export default GamePlay;
