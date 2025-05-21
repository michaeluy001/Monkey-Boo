import { useState, useEffect, useRef } from "react";
import { FallingFruits } from "./Animation";
import Button from "./Button";
import dancingMonkey from "/src/assets/dancing monkey.gif";
import { motion } from "motion/react";

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
      <div className="bg-amber-300/30 h-screen  w-full  fixed top-0 left-0 flex items-center overflow-hidden">
        <motion.div
          className="relative bg-amber-400 flex flex-col text-3xl h-1/3 w-full justify-center items-center space-y-10 "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <p>{randomPhraseRef.current}!</p>
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
      </div>
    </>
  );
};

export default LevelUpDialog;
