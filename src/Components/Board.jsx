import { useEffect, useState} from "react";
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
  const [score, setScore] = useState(0);
  const { isGameOver } = useGameContext(false);
  const { clickCount } = useClickCounter(score);
  const { goal} = useLevelHandler(props.level);
  const { isLevelComplete } = useGoalTracker(clickCount, goal);
  const [isLevelUpDialogOpen, setLevelUpDialogOpen] = useState(false);


  const handleMonkeyFound = () => {
    setIsBoardDisabled(true);
  };

  const updateScore = (newScr) => {
    setScore(score + newScr);
  };

  useEffect(() => {
    if (isLevelComplete) {
      setIsBoardDisabled(true);
      openDialog();
    }
  }, [isLevelComplete]);

  const handleNextLevel = () => {
    setLevelUpDialogOpen(false);
    props.onLevelUp();
    props.onReset();
    setIsBoardDisabled(false);
    props.onGameScoreUpdate(score);
  };

  const openDialog = () => {
    setTimeout(() => {
      setLevelUpDialogOpen(true);
    }, 1000);
  };



  return (
    <>
      <div className="grid grid-cols-3 m-auto justify-items-center max-w-[450px]">
        {fruits.map((item, index) => (
          <Tile
            id={index}
            key={index}
            fruit={item}
            isAMonkey={index === monkeyIndex}
            onDisable={isBoardDisabled}
            onMonkeyFound={handleMonkeyFound}
            onScoreUpdate={updateScore}
          />
        ))}
      </div>
      {isLevelUpDialogOpen && (
        <LevelUpDialog
          onNextLevel={handleNextLevel}
          score={props.gameScore + score}
          level={props.level}
        />
      )}
      {isGameOver && <GameOver score={props.gameScore} level={props.level} />}

    </>
  );
};

export default Board;
