import axios from "axios";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import PostResultDialog from "./GameFinishedForm-Dg";
import { useGameContext } from "./GameContext";

const GameFinishedForm = (props) => {
  const [isPostSuccess, setPostSuccess] = useState(false);
  const [isPostFail, setPostFail] = useState(false);
  const {gameScore} = useGameContext();


  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      playerName: e.target.playerName.value,
      score: gameScore,
    };

    try {
      await axios.post("https://monkey-boo-server.onrender.com/submit", formData);
      setPostSuccess(true);
      setTimeout(() => {
        nav("/");
      }, 1000);
    } catch (err) {
      setPostFail(true);
      setTimeout(() => {
        setPostFail(false);
      }, 1000);
    }
  };

  return (
    <>
      <motion.form
        className="flex flex-col gap-2 items-center my-3"
        method="POST"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, type: "spring" }}
      >
        <div className="flex gap-2">
          <motion.input
            name="playerName"
            type="text"
            id="input"
            className="rounded-2xl h-auto border-1   ring-yellow-600 px-2 placeholder:text-center focus:outline-none focus:ring-2"
            placeholder="Enter Your Name"
            autoComplete="off"
            required
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 0.2, delay: 1 }}
          />
          <button
            type="submit"
            className="size-auto border-2 rounded-full justify-items-center"
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
        <AnimatePresence>
          <div className="items-center w-full content-center text-center text-2xl ">
            {isPostSuccess && (
              <PostResultDialog className="text-green-600/60 bg-amber-300 ">
                Success!{" "}
              </PostResultDialog>
            )}
            {isPostFail && (
              <PostResultDialog className="text-red-600/60 bg-amber-300 shadow-lg shadow-yellow-800/50">
                Name Already Exists.
              </PostResultDialog>
            )}
  
          </div>
        </AnimatePresence>
      </motion.form>
    </>
  );
};
export default GameFinishedForm;
