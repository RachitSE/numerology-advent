// src/components/Navbar.js


import { motion } from 'framer-motion';
import { fadeIn } from '../animations/animationVariants';
// src/components/Navbar.js

import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  <motion.nav
      className="bg-indigo-900 text-white py-4"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
    > </motion.nav>
  return (
    
    <nav className="bg-indigo-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Numerology & Astrology</h1>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => setCurrentPage('home')}
              className="cursor-pointer hover:text-yellow-400"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('about')}
              className="cursor-pointer hover:text-yellow-400"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentPage('aiguru')}
              className="cursor-pointer hover:text-yellow-400"
            >
              AI Guru
            </button>
          </li>
          <li>
            <a
              href="https://github.com/RachitSE"
              className="hover:text-yellow-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

