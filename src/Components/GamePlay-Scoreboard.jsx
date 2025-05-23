import ReturnButton from "./ReturnButton";
import { motion } from "motion/react";
const Scoreboard = (props) => {
  return (
    <>
      
      <motion.div
        className="h-20 w-full fixed top-0 bg-amber-200 content-center items-center justify-items-center px-5 grid grid-cols-3 "
        initial={{ top: -100 }}
        animate={{ top: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ReturnButton className="text-3xl" />
        <div className="text-center text-xs">
          Current Score <p className="text-lg">{props.gameScore}</p>
        </div>
        <div className="text-center flex flex-col">
         
          <p>Level</p> <p>{props.level}</p>
        </div>
      </motion.div>
      ;
    </>
  );
};

export default Scoreboard;
