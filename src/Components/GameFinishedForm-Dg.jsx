import { motion } from "motion/react";

const PostResultDialog = ({ children, className = "" }) => {
  const baseStyle =
    "fixed top-1/2 -translate-y-1/2 w-full left-0 ";
  return (
    <>
      <motion.p
        key="wtf"
        className={`${className} ${baseStyle}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.p>
    </>
  );
};

export default PostResultDialog;
