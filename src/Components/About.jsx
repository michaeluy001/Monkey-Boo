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
      <div className="fixed top-20 left-1 rounded-full bg-yellow-500 size-10 content-center justify-items-center text-3xl text-green-900 active:scale-90 transition-transform cursor-pointer">
        <FaInfoCircle onClick={handleToggle} />
      </div>
      {isOpen && (
        <motion.div
          className="absolute top-1/2 left-1/2  -translate-1/2 w-full text-justify px-10 py-5 bg-yellow-500 rounded-3xl transition max-w-[700px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
        >
          {" "}
          <p className="flex justify-end text-2xl my-2 z-2 ">
            <IoMdClose onClick={handleToggle} className="cursor-pointer" />
          </p>
          <p className="text-center text-2xl text-green-900 font-bold my-2">--READ ME--</p>
          <div className="px-5 overflow-y-scroll scroll-m-0.5 h-90 text-yellow-900">
            <p className="my-5 text-lg text-green-900 font-bold">
              Game Objective
            </p>
            <p className="">
              The game is simple and fun! Your objective is to collect a
              specific number of fruits in each level — but watch out for
              Monkey-Boo! As you advance, the number of fruits required
              increases, and Monkey-Boo changes positions to keep you on your
              toes. Each type of fruit carries a different point value, so
              choose wisely and move quickly!
            </p>
            <p className="my-5 text-lg text-green-900 font-bold">
              About The Game
            </p>
            <p className="">
              This game is my personal project. Named it 'Monkey-boo!' because I
              find it CUTE, catchy and fun to pronounce. I started it with one
              goal in mind — to learn and to teach. I began drafting the first
              version in December 2025 using just vanilla JavaScript. I finished
              the initial version and published it at
              <a
                href="http://monkey-boo.fun/"
                target="_blank"
                className="font-bold text-lg text-amber-900 hover:text-green-800 active:text-red-800"
              >
                Monkey-boo!
              </a>
              . As of this writing, there have been many improvements in every
              aspect. That said, there are still countless opportunities for
              improvement that I plan to address. Also, I used images I grabbed
              from google but I'm planning to make my own sprites to avoid any
              copyright infringement.
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
            <p className="my-5 text-lg text-green-900 font-bold">
              Beyond Monkey-Boo!
            </p>
            <p>
              Obviously, the game isn't complete yet, but I won’t wait for it to
              become perfect — because it never will. Nothing ever is. There
              will be flaws, and I won’t be able to address all of them, as I’m
              the only one developing this game. However, I will make the
              program as scalable and maintainable as possible to allow room for
              future features. Soon, I plan to implement more traps and rewards
              — possibly including placing more than one monkey and a timer.
              <br /> In the near future, I also want to introduce a card system
              where players can use their tokens to buy CARDS. Since this is a
              jungle-themed game, I’d like the cards to include trivia about
              nature and wildlife, as my primary goal is to create a fun and
              engaging experience for kids. I have high hopes for this game, but
              I know it will be more difficult and time-consuming if I don’t
              take the time to study programming principles like refactoring.
              For now, I’ll focus on improving the visuals and maintaining the
              game regularly.
            </p>
            <p className="my-5 text-lg text-green-900 font-bold">
              If you have questions,
            </p>
            <p>
              please email me @ microfarad043@gmail.com. I'm planning to link my
              socials here as well soon! Thank you for playing the game!
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GameObjective;
