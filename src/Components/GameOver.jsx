import DialogOverlay from "./DialogOverlay";
import GameOverForm from "./GameFinishedForm";
import { useState, useEffect } from "react";
import HomeButton from "./HomeButton";
import { motion, AnimatePresence } from "motion/react";
import DialogScore from "./Dialog-Score";

const GameOver = (props) => {
  const [isFormShown, setFormShown] = useState(false);
  const [isLabelShown, setLabelShown] = useState(true);
  const delay = 2;

  useEffect(() => {
    const timeId = setTimeout(() => {
      setFormShown(true);
    }, 1000);
    return () => clearTimeout(timeId);
  }, []);

  useEffect(() => {
    const timeId = setInterval(() => {
      setLabelShown((prev) => !prev);
    }, 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <>
      <DialogOverlay timeout={1} duration={1} />
      <motion.div
        className="fixed text-orange-900 max-w-[500px] bg-amber-200/70  w-full h-70 top-1/2 left-1/2 -translate-1/2 text-center overflow-hidden content-center rounded-4xl shadow-md shadow-yellow-800/80"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", delay: delay }}
      >
        <div className="my-5 space-y-5 relative">
          <AnimatePresence>
            {isLabelShown && (
              <>
                <motion.p
                  className="text-4xl font-bold"
                  key="animation"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0, scale: 1, rotate: -2 }}
                  exit={{ opacity: 1, scale: 0.8, rotate: 2 }}
                  transition={{
                    delay: 2,
                    repeat: Infinity,
                    ease: "linear",
                    type: "spring",
                  }}
                >
                  Game Over
                </motion.p>
                <DialogScore score={props.score} delayTime={delay} />
              </>
            )}
          </AnimatePresence>

          {isFormShown && <GameOverForm score={props.score} />}
        </div>
        <HomeButton className="absolute -left-5 -bottom-5 bg-green-700 size-20" />
      </motion.div>
    </>
  );
};

export default GameOver;
