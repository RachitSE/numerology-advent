// src/components/LandingPage.js

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideUp } from '../animations/animationVariants';

const LandingPage = () => {
  return (
    <motion.section
      id="home"
      className="bg-gradient-to-br from-purple-800 to-indigo-900 min-h-screen flex flex-col items-center justify-center text-white"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        variants={slideUp}
      >
        Discover Your Future
      </motion.h1>
      <motion.p
        className="text-lg mb-8"
        variants={slideUp}
        transition={{ delay: 0.3 }}
      >
        Unlock the secrets of numerology and astrology with personalized predictions.
      </motion.p>
      <motion.a
        href="#form"
        className="bg-yellow-400 text-indigo-900 py-2 px-4 rounded-lg font-bold hover:bg-yellow-500 transition ease-in-out duration-300"
        variants={slideUp}
        transition={{ delay: 0.6 }}
      >
        Get Started
      </motion.a>
    </motion.section>
  );
};

export default LandingPage;
