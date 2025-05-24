import React from 'react';
import { motion } from 'framer-motion';

// SlideInTitle component
function SlideInTitle({ children }) {
  return (
    <motion.h1
      initial={{ x: -100, opacity: 0 }}        // ξεκινάει εκτός οθόνης αριστερά και αόρατο
      animate={{ x: 0, opacity: 1 }}           // slide in στη θέση του και γίνεται ορατό
      transition={{ duration: 1.1, ease: "easeOut" }} // ομαλό animation
    >
      {children}
    </motion.h1>
  );
}

export default SlideInTitle;
