import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, scaleUp, slideUp } from '../animations/animationVariants';
import {
  lifePathMeanings,
  destinyMeanings,
  personalityMeanings,
  soulUrgeMeanings,
} from '../NumerologyMeanings';
import {
  getCareerAdvice,
  getChallenges,
  getLifePathSummary,
  getRelationshipAdvice,
  getStrengths,
} from '../helpers/numerologyHelpers';

const Results = ({
  name,
  lifePathNumber,
  destinyNumber,
  personalityNumber,
  soulUrgeNumber,
  zodiacSign,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <motion.section
      className="py-10 bg-gradient-to-r from-indigo-200 to-purple-300 text-indigo-900"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-8 text-center text-indigo-900 tracking-wide"
        variants={scaleUp}
        initial="initial"
        animate="animate"
        transition="transition"
      >
        Your Detailed Numerology Report
      </motion.h2>

      <div className="container mx-auto max-w-lg p-8 rounded-lg bg-white shadow-xl">
        <motion.div
          className="grid grid-cols-1 gap-8"
          variants={slideUp}
          initial="initial"
          animate="animate"
          transition="transition"
        >
          {/* Personal Information */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <p className="text-lg mb-4">
              <strong>Name:</strong> {name}
            </p>
            <p className="text-lg mb-4">
              <strong>Life Path Number:</strong> {lifePathNumber} -{' '}
              {lifePathMeanings[lifePathNumber]}
            </p>
            <p className="text-lg mb-4">
              <strong>Destiny Number:</strong> {destinyNumber} -{' '}
              {destinyMeanings[destinyNumber]}
            </p>
            <p className="text-lg mb-4">
              <strong>Personality Number:</strong> {personalityNumber} -{' '}
              {personalityMeanings[personalityNumber]}
            </p>
            <p className="text-lg mb-4">
              <strong>Soul Urge Number:</strong> {soulUrgeNumber} -{' '}
              {soulUrgeMeanings[soulUrgeNumber]}
            </p>
            <p className="text-lg mb-4">
              <strong>Zodiac Sign:</strong> {zodiacSign}
            </p>
          </div>

          {/* Life Summary and Recommendations */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Life Summary</h3>
            <p className="text-lg mb-4">
              <strong>Your Life Path: </strong>
              {getLifePathSummary(lifePathNumber)}
            </p>
            <p className="text-lg mb-4">
              <strong>Career Advice: </strong>
              {getCareerAdvice(lifePathNumber)}
            </p>
            <p className="text-lg mb-4">
              <strong>Relationship Advice: </strong>
              {getRelationshipAdvice(personalityNumber, soulUrgeNumber)}
            </p>
            <p className="text-lg mb-4">
              <strong>Strengths: </strong>
              {getStrengths(lifePathNumber)}
            </p>
            <p className="text-lg mb-4">
              <strong>Challenges: </strong>
              {getChallenges(lifePathNumber)}
            </p>
          </div>

          {/* New section for expanded insights */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Expanded Insights</h3>
            <p className="text-lg mb-4">
              <strong>Health: </strong> You may experience phases where your health fluctuates. Staying active and focusing on mental wellness is key for a balanced life.
            </p>
            <p className="text-lg mb-4">
              <strong>Wealth: </strong> Financial stability comes with responsibility. Seek opportunities but avoid unnecessary risks.
            </p>
            <p className="text-lg mb-4">
              <strong>Emotional Well-being: </strong> You thrive on emotional connections. Focus on relationships that bring you joy and fulfillment.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Results;
