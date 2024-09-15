// src/components/Navbar.js

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/animationVariants';
import { Link } from 'react-scroll'; // Import react-scroll for smooth scrolling

const Navbar = () => {
  return (
    <motion.nav
      className="bg-indigo-900 text-white py-4"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Numerology & Astrology</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-400"
            >
              About
            </Link>
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
    </motion.nav>
  );
};

export default Navbar;
