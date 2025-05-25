import { useState, useEffect } from "react";


const roundGoalMap = {
  1: 2,
  2: 3,
  3: 5,
  4: 7,
  5: 8,
};

const maxRound = Object.keys(roundGoalMap).length;

const useLevelHandler = (round) => {
  const [goal, setGoal] = useState(roundGoalMap[round]);
  useEffect(() => {
    setGoal(roundGoalMap[round]);
  }, [round]);
  return { goal, maxRound };
};

const useGoalTracker = (clickCount, goal) => {
  const [isRoundComplete, setIsRoundComplete] = useState(false);
  useEffect(() => {
    console.log(`useGoalTracker[Goal:${goal}, Click Count: ${clickCount}`)
    console.log(`useGoalTracker: is Click count beyond goal now? ${clickCount >= goal}`)
    if (clickCount >= goal) {setIsRoundComplete(true) 
      console.log(`useGoalTracker: is Click count beyond goal now? ${clickCount >= goal}`)}
  }, [clickCount]);
  return { isRoundComplete, setIsRoundComplete };
};

const useClickCounter = (score) => {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    if (score) setClickCount(clickCount + 1);
  }, [score]);
  return { clickCount, setClickCount };
};


export { useLevelHandler, useGoalTracker, useClickCounter, };
