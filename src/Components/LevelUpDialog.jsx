import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { motion } from "motion/react";
import DialogOverlay from "./DialogOverlay";
import { useLevelHandler } from "./GameLogicHelper";
import MonkeyWonOverlay from "./MonkeyWonOverlay";
import GameFinishedForm from "./GameFinishedForm";
import HomeButton from "./HomeButton";
import DialogScore from "./Dialog-Score";

const LevelUpDialog = (props) => {
  const { maxLevel } = useLevelHandler();
  const delay = 0.5;

  const [isGameFinished, setGameFinished] = useState(false);

  const phrases = [
    "Awesome",
    "Extraordinary",
    "Excellent",
    "Good Job",
    `That's Perfect`,
  ];
  const randomPhraseRef = useRef(
    phrases[Math.floor(Math.random() * phrases.length)]
  );

  const handleNext = () => {
    props.onNextLevel();
  };

  useEffect(() => {
    if (props.level >= maxLevel) {
      setGameFinished(true);
    }
  }, [props.level]);

  return (
    <>
      <DialogOverlay timeout={0} duration={0.3} />

      <motion.div
        className="fixed left-0  top-1/2 -translate-y-1/2 bg-amber-100 border-y-2 border-amber-600 flex flex-col  h-75 w-full justify-center content-center items-center space-y-5 overflow-hidden rounded-4xl text-yellow-700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: delay, type: "spring" }}
      >
        <p className="text-4xl text-green-800 font-bold">
          {randomPhraseRef.current}!
        </p>

        <DialogScore score={props.score} delayTime={delay}/>
  
       
        {!isGameFinished ? (
          <Button
            type="nextLevel"
            className="text-lg text-white"
            onClick={handleNext}
          >
            Next Level
          </Button>
        ) : (
          <GameFinishedForm score={props.score} />
        )}

        {isGameFinished && <MonkeyWonOverlay />}

        <HomeButton className="absolute -left-5 -bottom-5 bg-green-600 size-20" />
      </motion.div>
    </>
  );
};

export default LevelUpDialog;
