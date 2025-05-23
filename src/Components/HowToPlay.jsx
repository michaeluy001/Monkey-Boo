import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";

const GameObjective = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed top-25 left-5 rounded-full bg-yellow-500 size-10 content-center justify-items-center text-3xl text-green-900">
        <FaInfoCircle onClick={handleToggle} />
      </div>
      {isOpen && (
        <motion.div
          className="absolute top-1/2 h-2/3 -translate-y-1/2 w-auto text-justify px-10 py-5 bg-yellow-500 rounded-3xl m-5 transition "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{duration: 0.3, ease:'linear'}}
        >
          {" "}
          <p className="flex justify-end text-2xl my-2 z-2">
            <IoMdClose onClick={handleToggle} />
          </p>
          <div className="overflow-scroll h-90 text-yellow-900">
            <p className="my-5 text-lg text-green-900 font-bold">Game Objective</p>
            <p className="">
              The game is simple and fun! Your objective is to collect a
              specific number of fruits in each level — but watch out for
              Monkey-Boo! As you advance, the number of fruits required
              increases, and Monkey-Boo changes positions to keep you on your
              toes. Each type of fruit carries a different point value, so
              choose wisely and move quickly!
            </p>
            <p className="my-5 text-lg text-green-900 font-bold">About The Game</p>
            <p className="">
              This game is my personal project, I started this with one goal in
              mind - TO LEARN. I have faced several challenges in terms of
              logic, brainstorming and design, so I used every available
              resource and everything that I have learned so far, in order to
              achieve a certain feature and to debug. Currently This work, like
              any other work, consumed a serious amount of time and energy. But
              I've dedicated my whole heart in creating this, enough I think
              that I call it a masterpiece.
            </p>
            <p className="my-5 text-lg text-green-900 font-bold">
              Technologies used
            </p>
            <ul className="list-disc ">
              <li>React/Vite</li>
              <li>Tailwind</li>
              <li>Framer-Motion</li>
              <li>React-Icons</li>
              <li>React-Router</li>
              <li>ChatGPT for AI images</li>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GameObjective;
