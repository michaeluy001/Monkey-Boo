import { useEffect, useState, useRef } from "react";
import Tile from "./Tile";
import useFruitsGenerator from "./useFruitsGenerator.js";
import { usePlaceMonkey } from "./MonkeyGenerator.js";
import { useClickedTilesCounter } from "./ScoreKeeper.js";
import { useGameContext } from "./GameContext.jsx";
import GameOver from "./GameOver.jsx";

const Board = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { increment, count } = useClickedTilesCounter();
  const scoreRef = useRef(null);
  const fruits = useFruitsGenerator(9);
  const monkeyIndex = usePlaceMonkey(9);
  const {isGameOver} = useGameContext(false);
  

  const handleMonkeyFound = () => {
    setIsDisabled(true);
    props.onGameOver;
  };

  const updateScore = (scr) => {
    scoreRef.current = scoreRef.current + scr;
    if (scr > 0) increment();
  };

  useEffect(() => {
    console.log(monkeyIndex);

    if (count > 7) {
      setIsDisabled(true);
    }
  }, [scoreRef.current]);



  return (
    <>
      <div className="grid grid-cols-3 m-auto justify-items-center">
        {fruits.map((item, index) => (
          <Tile
            id={index}
            key={index}
            fruit={item}
            isAMonkey={index === monkeyIndex}
            onDisable={isDisabled}
            onMonkeyFound={handleMonkeyFound}
            onScoreUpdate={updateScore}
          />
        ))}
      </div>

      {isGameOver && <GameOver />}
    </>
  );
};

export default Board;
