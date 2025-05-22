import { motion } from "motion/react";
import { useState, useEffect } from "react";

const GameOverLabel = () => {
  const [lettersGame, setLettersGame] = useState([]);
  const top = 5;

  useEffect(() => {
    setLettersGame([
      { letter: "G", pos: 0 },
      { letter: "A", pos: "10%" },
      { letter: "M", pos: "20%" },
      { letter: "E", pos: "30%" },
    ]);
    console.log(lettersGame);
  }, []);

  return (
    <>
      <div className="relative h-20 w-full bottom-0 left-1/2 -translate-1/2 bg-white flex items-center justify-center">
        <div className="relative w-1/2 h-20 bg-amber-200">
          {lettersGame.map((item, index) => (
            <motion.p
              key={index}
              className={`absolute  top-1/2 -translate-y-1/2`}
              style={{ left: item.pos }}
              initial={{ bottom: 0 }}
              animate={{ bottom: 5, bottom: 0 }}
              transition={{ duration: 1, type: "spring", repeat: Infinity }}
            >
              {item.letter}
            </motion.p>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameOverLabel;
