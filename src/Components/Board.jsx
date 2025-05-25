import { useEffect, useState } from "react";
import Tile from "./Tile";
import useFruitsGenerator from "./useFruitsGenerator.js";
import { usePlaceMonkey } from "./MonkeyGenerator.js";
import { useGameContext } from "./GameContext.jsx";
import GameOver from "./GameOver.jsx";
import {
  useGoalTracker,
  useLevelHandler,
  useClickCounter,
} from "./GameLogicHelper.js";
import LevelUpDialog from "./LevelUpDialogModal.jsx";

const Board = (props) => {
  const fruits = useFruitsGenerator(9);
  const monkeyIndex = usePlaceMonkey(9);
  const [isBoardDisabled, setIsBoardDisabled] = useState(false);
  const { gameScore, setGameScore } = useGameContext();
  const { isGameOver } = useGameContext(false);
  const { roundScore, setRoundScore } = useGameContext();
  const { clickCount, setClickCount } = useClickCounter(roundScore);
  const [isLevelUpDialogOpen, setLevelUpDialogOpen] = useState(false);
  const { round, setRound } = useGameContext();
  const { goal } = useLevelHandler(round);
  const { isRoundComplete, setIsRoundComplete } = useGoalTracker(
    clickCount,
    goal
  );
  const [isBoardRunning, setBoardRunning] = useState(false);

  const handleMonkeyFound = () => {
    setIsBoardDisabled(true);
  };

  const updateGameScore = (newScr) => {
    setRoundScore(roundScore + newScr);
  };

  useEffect(() => {
    setRound(1);
  }, []);

  useEffect(() => {
    if (!isRoundComplete) return;
    setGameScore(gameScore + roundScore);
    setIsBoardDisabled(true);
    openDialog();
  }, [isRoundComplete]);


  const handleNextLevel = () => {
    setLevelUpDialogOpen(false);
    setRound(round + 1);
    resetBoard();
  };

  const resetBoard = () => {
    setIsBoardDisabled(false);
    setBoardRunning(false);
    setRoundScore(0);
    setClickCount(0);
    setIsRoundComplete(false);
  };

  const openDialog = () => {
    setTimeout(() => {
      setLevelUpDialogOpen(true);
    }, 1000);
  };

  const initBoard = () => {
    setTimeout(() => {
      setBoardRunning(true);
    }, 500);
  };

  useEffect(() => {
    initBoard();
  });

  return (
    <>
      {isBoardRunning && (
        <div className="grid grid-cols-3 m-auto justify-items-center max-w-[450px]">
          {fruits.map((item, index) => (
            <Tile
              id={index}
              key={index}
              fruit={item}
              isAMonkey={index === 0}
              onDisable={isBoardDisabled}
              onMonkeyFound={handleMonkeyFound}
              onScoreUpdate={updateGameScore}
            />
          ))}
        </div>
      )}
      {isLevelUpDialogOpen && <LevelUpDialog onNextLevel={handleNextLevel} />}
      {isGameOver && <GameOver score={props.gameScore} level={props.level} />}
    </>
  );
};

export default Board;
