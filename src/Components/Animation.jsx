import banana from "/src/assets/banana.png";
import { motion, useAnimate, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const FallingFruits = (props) => {
  const [randomPosition, setRandomPosition] = useState(0);
  const [randomDelay, setRandomDelay] = useState(0);
  const [isAnimating, setAnimating] = useState(true);

  useEffect(() => {
    setRandomPosition(Math.floor(Math.random() * 100));
    setRandomDelay(Math.floor(Math.random() * 100));
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimating(false);
    }, 1000);
    return ()=> clearTimeout(timeoutId)
  }, []);

  return (
    <>
      {isAnimating && (
        <motion.div
          className={"top-0 absolute "}
          key={props.id}
          style={{ right: randomPosition, transitionDelay: randomDelay }}
          initial={{ top: -100, opacity: 0 }}
          animate={{ top: 100, opacity:1, rotate: 360 }}
          transition={{
            top: { duration: 3, ease: "linear" },
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            
          }}
        >
          <img src={banana} className="size-10" />
        </motion.div>
      )}
    </>
  );
};

export { FallingFruits };
