import GameOver from "./GameOver";
import Board from "./Board";
import ReturnButton from "./ReturnButton";

import { GameStateProvider } from "./GameContext";

const GamePlay = () => {
  return (
    <>
      <GameStateProvider>
        <div className="h-10 bg-amber-200 content-center px-5">
          <ReturnButton />
        </div>
        <Board onGameOver={() => setIsGameOver(true)} />
      </GameStateProvider>
    </>
  );
};

export default GamePlay;
