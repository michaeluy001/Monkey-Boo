import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
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
  const [isPopupShown, setPopupshown] = useState(false);

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
      showPopup();
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

  // useEffect(() => {
  //   setPopupshown(true);
  //   const timeoutId = setTimeout(() => {
  //     setPopupshown(false);
  //   }, 1000);
  //   return () => clearTimeout(timeoutId);
  // }, [wasClickedRef.current]);

  const showPopup = () => {
    setPopupshown(true);
    setTimeout(() => {
      setPopupshown(false);
    }, 1000);
  };

  return (
    <>
      <motion.div
        className="relative bg-amber-50 rounded-xl h-30 w-30 text-center content-center m-1 border-2 border-amber-100 overflow-hidden"
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

        <AnimatePresence>
          {isPopupShown && (
            <motion.p
              key="key"
              className="absolute top-10 right-2 text-lg size-10 text-white bg-yellow-500 rounded-full opacity-1 content-center "
              initial={{ top: "25%", opacity: 1 }}
              animate={{ top: "1%", opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              +{fruit.pts}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Tile;
