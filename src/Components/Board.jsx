import { useEffect, useState, useRef } from "react";
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

const Board = (props) => {
  const fruits = useFruitsGenerator(9);
  const monkeyIndex = usePlaceMonkey(9);
  const [isDisabled, setIsDisabled] = useState(false);
  const [score, setScore] = useState(0);

  const { isGameOver } = useGameContext(false);

  const [tileScore, setTileScore] = useState(0);
  const { clickCount } = useClickCounter(score);
  const { goal } = useLevelHandler(props.level);
  const { isLevelComplete } = useGoalTracker(clickCount, goal);

  

  const handleMonkeyFound = () => {
    setIsDisabled(true);
    props.onGameOver;
  };

  const updateScore = (newScr) => {
    setTileScore(newScr);
    setScore(score + newScr);
 
  };

  useEffect(() => {
    console.log("click Count", clickCount);
    console.log("Tile Score", tileScore);
    console.log("Score: ", score)
    console.log("GOAL", goal);
  }, [score]);

  useEffect(() => {
    if (isLevelComplete) setIsDisabled(true);
  }, [isLevelComplete]);

  return (
    <>
      <div className="grid grid-cols-3 m-auto justify-items-center">
        {fruits.map((item, index) => (
          <Tile
            id={index}
            key={index}
            fruit={item}
            isAMonkey={index === 9}
            onDisable={isDisabled}
            onMonkeyFound={handleMonkeyFound}
            onScoreUpdate={updateScore}
          />
        ))}
      </div>
      {isLevelComplete}
      {isGameOver && <GameOver />}
    </>
  );
};

export default Board;
