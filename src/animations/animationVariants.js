// src/animations/animationVariants.js
import React from 'react';
import { motion } from 'framer-motion';
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };
  
  export const scaleUp = {
    initial: { scale: 0.9 },
    animate: { scale: 1 },
    transition: { duration: 0.5 },
  };
  
  export const slideUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };
  
  const AnimationVariants = () => (
    <>
      {/* Example section with fade-in animation */}
      <motion.section
        className="py-10 bg-indigo-100 text-indigo-900"
        initial={{ opacity: 0 }} // Initial state (completely transparent)
        animate={{ opacity: 1 }} // Final state (fully visible)
        transition={{ duration: 1 }}
      >
        {/* Add content here */}
      </motion.section>
  
      {/* Example heading with scale-up animation */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ scale: 0.9 }} // Initial state (slightly smaller)
        animate={{ scale: 1 }} // Final state (normal size)
        transition={{ duration: 0.5 }}
      >
        {/* Add content here */}
        Your Numerology Prediction
      </motion.h2>
    </>
  );
  
  export { AnimationVariants };