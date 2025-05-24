import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import ReturnButton from "./ReturnButton";
import { useState } from "react";
import { MdHome } from "react-icons/md";
const HomeButton = ({ className = "" }) => {
  const [isEnlarged, setEnlarged] = useState(false);
  const floatingButtonStyle =
    "rounded-full content-center justify-items-center transition-transform";

  const handleToggle = () => {
    if (isEnlarged) return;
    setEnlarged(true);
  };

  return (
    <>
      <div
        className={`${className}  ${isEnlarged && "scale-1500"} ${floatingButtonStyle}`}
        onClick={handleToggle}
      >
        {!isEnlarged && (
          <div className={`  `}>
            <MdHome className="text-3xl " />
          </div>
        )}
      </div>
      {isEnlarged && (
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 size-full text-center text-white  justify-items-center space-y-5 my-10 opacity-0 px-10"
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="flex justify-end w-full" onClick={() => setEnlarged(false)}>
            <IoMdClose />
          </p>
          <p>Your progress will not be saved. Return to the Main Menu?</p>
          <ReturnButton className="flex justify-center text-2xl font-bold text-yellow-400 w-auto active:scale-90">
            Yes
          </ReturnButton>
        </motion.div>
      )}
    </>
  );
};

export default HomeButton;
