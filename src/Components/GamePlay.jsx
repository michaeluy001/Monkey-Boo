import GameOver from "./GameOver";
import Board from "./Board";
import ReturnButton from "./ReturnButton";
import {useState} from 'react';
import { GameStateProvider } from "./GameContext";



const GamePlay = () => {
   
  const [level, setLevel] = useState(5);
  
  const handleLevelUp = () => {
    setLevel(level+1)
  }

  return (
    <>
      <GameStateProvider>
        <div className="h-10 bg-amber-200 content-center px-5 grid grid-cols-3  ">
          <ReturnButton className="text-3xl"/>
          <div className="text-center"></div>
          <div className="text-center">Level: {level} </div>
        </div>
        <Board level={level} onLevelUp={handleLevelUp} />
      </GameStateProvider>
    </>
  );
};

export default GamePlay;
