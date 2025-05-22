import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { useInitializeMonkey } from "./MonkeyGenerator";
import { useGameContext } from "./GameContext";
import monkeyGood from "/src/assets/monkey good.png";

const Tile = (props) => {
  const [isAMonkey, setIsAMonkey] = useState(false);
  const { setIsGameOver } = useGameContext();
  const fruit = props.fruit;
  const [isFruitVisible, setIsFruitVisible] = useState(true);
  const monkeyInfo = useInitializeMonkey("Monkeyboo");
  const wasClickedRef = useRef(false);

  const handleClick = () => {
    if (props.onDisable) return;
    handlePlayerChoice();
    setIsFruitVisible(false);
  };

  const handlePlayerChoice = () => {
    if (props.isAMonkey) {
      handleMonkeyFound();
      return;
    }
    if (!wasClickedRef.current) {
      generateScore(fruit.pts);
      wasClickedRef.current = true;
    }
  };

  const generateScore = (fruitScore) => {
    props.onScoreUpdate(fruitScore);
  };

  const handleMonkeyFound = () => {
    setIsAMonkey(true);
    props.onMonkeyFound();
    setIsGameOver(true);
  };

  return (
    <>
      <motion.div
        className="bg-amber-50 rounded-xl h-30 w-30 text-center content-center m-1 border-2 border-amber-100 overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        onClick={handleClick}
      >
        <AnimatePresence>
          {isFruitVisible && (
            <motion.img
              key="picture"
              src={fruit.imgSrc}
              alt={fruit.name}
              exit={{ scale: 0, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>

        <div>
          {!isAMonkey ? (
            <motion.div className="bg-green-600">
              <motion.img
                src={monkeyGood}
                alt="monkey good"
                className="w-50 h-30 object-cover "
              />
            </motion.div>
          ) : (
            <div className="">
              <img src={monkeyInfo.imgSrc} alt={monkeyInfo.alt} />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Tile;
