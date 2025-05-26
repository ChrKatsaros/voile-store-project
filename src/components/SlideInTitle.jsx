import React from 'react';
import { motion } from 'framer-motion';

// SlideInTitle component 
function SlideInTitle({ children }) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
        filter: "blur(2px)",
        letterSpacing: "0.1em"
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        letterSpacing: "0em"
      }}
      transition={{
        duration: 1.1,
        ease: "easeOut"
      }}
      style={{
        fontWeight: 400,
        fontFamily: '"Playfair Display", serif', 
      }}
    >
      {children}
    </motion.h1>
  );
}

export default SlideInTitle;
