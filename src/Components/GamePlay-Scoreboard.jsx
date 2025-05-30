import { useGameContext } from "./GameContext";
import ReturnButton from "./ReturnButton";
import { motion } from "motion/react";
const Scoreboard = () => {
  const {roundScore} = useGameContext();
  const {round} = useGameContext();
  return (
    <>
      <motion.div
        className="h-20 w-full fixed top-0  content-center items-center justify-items-center "
        initial={{ top: -100 }}
        animate={{ top: 0,  }}
        transition={{ duration: 0.5, type:'spring' }}
      >
        <div className="max-w-[600px] border grid grid-cols-3 m-auto items-center text-yellow-500 justify-items-center text-lg whitespace-nowrap py-1 rounded-4xl">
          <ReturnButton className="text-3xl" />
          <div className="text-center text-lg ">
            Round Score <p className="text-lg">{roundScore}</p>
          </div>
          <div className="text-center flex flex-col">
            <p>Round</p> <p>{round}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Scoreboard;
