import { motion } from "motion/react";

const DialogScore = ({ score, delayTime }) => {
  return (
    <>
      <motion.div
        className=" flex flex-col text-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 1, delay: delayTime + 1, type: "spring" }}
      >
        <p>Your Score</p>{" "}
        <motion.p
          className="text-3xl opacity-1"
          initial={{ scale: 0 , rotate: 0 }}
          animate={{ scale: 1.5, rotate: 360, opacity: 1 }}
          transition={{ duration: 1, delay: delayTime + 2, type: "spring" }}
        >
          {score}
        </motion.p>
      </motion.div>
    </>
  );
  0;
};

export default DialogScore;
