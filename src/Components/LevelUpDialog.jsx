import { useState, useEffect, useRef } from "react";
import { FallingFruits } from "./Animation";
import Button from "./Button";
import dancingMonkey from "/src/assets/dancing monkey.gif";
import { motion } from "motion/react";
import DialogOverlay from "./DialogOverlay";

const LevelUpDialog = (props) => {
  const [fruits, setFruits] = useState([]);

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
    let count = 0;
    const intervalId = setInterval(() => {
      setFruits((prev) => [...prev, { id: count++ }]);
    }, 300);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <DialogOverlay timeout={0} duration={0.3} />

      <motion.div
        className=" fixed left-0  top-1/2 -translate-y-1/2 bg-amber-100 border-y-2 border-amber-600 flex flex-col  h-75 w-full justify-center items-center space-y-5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5, type: "spring" }}
      >
        <p className="text-4xl text-green-800 font-bold">
          {randomPhraseRef.current}!
        </p>
        <div className=" flex flex-col text-center ">
          <p>Your Score</p> <p className="text-2xl">{props.score}</p>
        </div>
        <Button
          type="nextLevel"
          className="text-lg text-white"
          onClick={handleNext}
        >
          Next Level
        </Button>

        <div className="size-30 bottom-0 right-0 absolute">
          <motion.img
            src={dancingMonkey}
            alt="Dancing Monkey"
            className="absolute bottom-0 right-100"
            initial={{ right: 300 }}
            animate={{ right: 0 }}
            transition={{ duration: 2, type: "spring" }}
          />

          <div className="overflow-hidden w-full">
            {fruits.map((fruit) => (
              <FallingFruits key={fruit.id} id={fruit.id} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LevelUpDialog;
