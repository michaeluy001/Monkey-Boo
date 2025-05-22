import DialogOverlay from "./DialogOverlay";
import GameOverForm from "./GameOver-Form";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { MdHome } from "react-icons/md";

import ReturnButton from "./ReturnButton";

import { motion, AnimatePresence } from "motion/react";

const GameOver = (props) => {
  const [isFormShown, setFormShown] = useState(false);
  const [isLabelShown, setLabelShown] = useState(true);
  const [isEnlarged, setEnlarged] = useState(false);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setFormShown(true);
    }, 2000);
    return () => clearTimeout(timeId);
  }, []);

  useEffect(() => {
    const timeId = setInterval(() => {
      setLabelShown((prev) => !prev);
    }, 500);
    return () => clearInterval(timeId);
  }, []);

  const handleToggle = () => {
    if (isEnlarged) return;
    setEnlarged((prev) => !prev);
  };

  return (
    <>
      <DialogOverlay timeout={1} duration={1} />
      <motion.div
        className="fixed text-orange-900  bg-amber-200/70  w-full h-70 top-1/2 -translate-y-1/2 text-center overflow-hidden content-center rounded-4xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", delay: 2 }}
      >
        <div className="my-5 space-y-5 relative">
          <AnimatePresence>
            {isLabelShown && (
              <motion.p
                className="text-4xl font-bold"
                key="animation"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0, scale: 1, rotate: -2 }}
                exit={{ opacity: 1, scale: 0.8, rotate: 2 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  type: "spring",
                }}
              >
                Game Over
              </motion.p>
            )}
          </AnimatePresence>
          <div className="flex flex-col">
            <p>Your Score</p> <p className="text-3xl">{props.score}</p>
          </div>
          {isFormShown && <GameOverForm score={props.score} />}
        </div>
        <div
          className={`fixed -bottom-5 -left-5 size-20 bg-green-700 rounded-full content-center justify-items-center ${isEnlarged && "scale-1500"} transition-transform active:scale-110 hover:scale-110`}
          onClick={handleToggle}
        >
          {!isEnlarged && <MdHome className="text-3xl " />}
        </div>
        {isEnlarged && (
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-1/2 size-50 text-white w-auto justify-items-center space-y-5 my-10 opacity-0"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p
              className="text-2xl absolute -top-15 -right-15 "
              onClick={() => setEnlarged(false)}
            >
              <IoMdClose />
            </p>
            <p>Your progress will not be saved. Return to the Main Menu?</p>
            <ReturnButton className="flex justify-center text-2xl font-bold text-yellow-400 w-auto active:scale-90">
              Yes
            </ReturnButton>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default GameOver;
