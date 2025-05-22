import { motion } from "motion/react";

const DialogOverlay = ({ children, className = "", timeout ='', duration='' }) => {
  const baseStyle =
    "fixed top-0 left-0 w-full h-screen bg-gray-900/90  grayscale-80";

  return (
    <>
      <motion.div
        className={`${className} ${baseStyle}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: timeout }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default DialogOverlay;
