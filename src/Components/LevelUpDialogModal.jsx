import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import DialogOverlay from "./DialogOverlay";
import { useLevelHandler } from "./GameLogicHelper";
import MonkeyWonOverlay from "./MonkeyWonOverlay";
import GameFinishedForm from "./GameFinishedForm";
import HomeButton from "./HomeButton";
import DialogScore from "./Dialog-Score";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

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
        className="fixed left-0  top-1/2 -translate-y-1/2 bg-amber-100 border-y-2 border-yellow-800 flex flex-col  h-75 w-full justify-center content-center items-center space-y-5 overflow-hidden rounded-4xl text-yellow-700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: delay, type: "spring" }}
      >
        {isGameFinished && (
          <p className="text-3xl text-green-800 font-bold text-center p-2">
            You are the king of the jungle!
          </p>
        )}
        {!isGameFinished && (
          <motion.div
            className="text-xs text-yellow-800 font-bold text-center fixed top-5 right-5 rotate-15 rounded-full bg-yellow-300 size-23 content-center justify-items-center "
            initial={{ scale: 5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", delay: 1 }}
          >
            <p className="flex">
              Round <br /> Complete!
            </p>
          </motion.div>
        )}

        <DialogScore score={props.score} delayTime={delay} />

        {!isGameFinished ? (
          <NextLevelButton onNextLevel={handleNext} level={props.level} />
        ) : (
          <GameFinishedForm score={props.score} />
        )}

        {isGameFinished && <MonkeyWonOverlay />}

        <HomeButton className="absolute -left-5 -bottom-5 bg-green-800 size-20" />
      </motion.div>
    </>
  );
};

export const NextLevelButton = ({ level, onNextLevel }) => {
  return (
    <>
      <motion.div
        className="text-md text-yellow-800 flex gap-2 items-center text-center border rounded-2xl p-2 shadow shadow-yellow-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onNextLevel}
      >
        <p className="">Round {level + 1}</p>
        <TbPlayerTrackNextFilled className="text-green-800" />
      </motion.div>
    </>
  );
};

export default LevelUpDialog;
