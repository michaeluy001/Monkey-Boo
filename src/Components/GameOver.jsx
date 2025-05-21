import GameOverForm from "./GameOver-Form";
import ReturnButton from "./ReturnButton";
import { motion } from "motion/react";

const GameOver = (props) => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-green-900/80 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.div
        className="fixed bg-white inset-x-0 mx-auto w-full h-1/2 top-1/5 text-center content-center overflow-hidden "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring", delay: 2 }}
      >
        <div className="my-10">
          <span className="text-6xl font-bold tracking-widest ">
            Game Over!
            
          </span>
         Your Score: {props.score}
         <GameOverForm score={props.score} />

          
        </div>
        <div className="space-y-3 font-bold flex flex-col">
          <div className="p-5 justify-items-center flex gap-3 text-2xl">
            <ReturnButton />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GameOver;
