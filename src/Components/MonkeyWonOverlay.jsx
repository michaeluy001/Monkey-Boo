import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FallingFruits } from "./Animation";
import dancingMonkey from "/src/assets/dancing monkey.gif";
import ReturnButton from "./ReturnButton";

const MonkeyWonOverlay = () => {
  const [fruits, setFruits] = useState([]);
  const [isAlive, setIsAlive] = useState(true);

  useEffect(() => {
    let count = 0;
    if (!isAlive) return;
    const intervalId = setInterval(() => {
      setFruits((prev) => [...prev, { id: count++ }]);
    }, 100);
    return () => clearInterval(intervalId);
  }, [isAlive]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAlive(false);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isAlive && (
          <div className="size-30 bottom-0 right-0 absolute">
            <motion.img
              key="animate"
              src={dancingMonkey}
              alt="Dancing Monkey"
              className="absolute bottom-0 right-100"
              initial={{ right: 300 }}
              animate={{ right: 0 }}
              transition={{ duration: 1, type: "spring" }}
              exit={{ left: -1000 }}
            />
            <div className="overflow-hidden w-full">
              {fruits.map((fruit) => (
                <FallingFruits key={fruit.id} id={fruit.id} />
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>
    
    </>
  );
};

export default MonkeyWonOverlay;
