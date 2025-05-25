import Board from "./Board";

import { useState, useEffect } from "react";
import { GameStateProvider, useGameContext } from "./GameContext";
import Scoreboard from "./GamePlay-Scoreboard";

const GamePlay = () => {
  return (
    <>
      <GameStateProvider>
        <Scoreboard />

        <Board />
      </GameStateProvider>
    </>
  );
};

export default GamePlay;
