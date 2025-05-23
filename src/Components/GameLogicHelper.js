import { useState, useEffect } from "react";

const levelGoalMap = {
  1: 2,
  2: 3,
  3: 5,
  4: 7,
  5: 8,
};

const maxLevel = Object.keys(levelGoalMap).length;

const useLevelHandler = (level) => {
  const [goal, setGoal] = useState(levelGoalMap[level]);
  useEffect(() => {
    setGoal(levelGoalMap[level]);
  }, [level]);
  return { goal, maxLevel };
};

const useGoalTracker = (clickCount, goal) => {
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  useEffect(() => {
 
    if (clickCount >= goal) setIsLevelComplete(true);
  }, [clickCount]);
  return { isLevelComplete, setIsLevelComplete };
};

const useClickCounter = (score) => {
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    if (score) setClickCount(clickCount + 1);
  }, [score]);
  return { clickCount };
};

export { useLevelHandler, useGoalTracker, useClickCounter };
