import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, scaleUp } from '../animations/animationVariants'; // Import the animation variants
import { lifePathMeanings, destinyMeanings, personalityMeanings, soulUrgeMeanings } from '../NumerologyMeanings';
import { getCareerAdvice, getChallenges, getLifePathSummary, getRelationshipAdvice,getStrengths} from '../helpers/numerologyHelpers';

const Results = ({
  name,
  lifePathNumber,
  destinyNumber,
  personalityNumber,
  soulUrgeNumber,
  zodiacSign,
}) => {
  return (
    <motion.section
      className="py-10 bg-indigo-100 text-indigo-900"
      variants={fadeIn} // Apply fadeIn variant
      initial="initial"
      animate="animate"
      transition="transition"
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        variants={scaleUp} // Apply scaleUp variant
        initial="initial"
        animate="animate"
        transition="transition"
      >
        Your Numerology Prediction
      </motion.h2>
      <div className="container mx-auto max-w-lg shadow-lg p-8 rounded-lg bg-white">
        <p className="text-lg mb-4">
          <strong>Name:</strong> {name}
        </p>
        <p className="text-lg mb-4">
          <strong>Life Path Number:</strong> {lifePathNumber} - {lifePathMeanings[lifePathNumber]}
        </p>
        <p className="text-lg mb-4">
          <strong>Destiny Number:</strong> {destinyNumber} - {destinyMeanings[destinyNumber]}
        </p>
        <p className="text-lg mb-4">
          <strong>Personality Number:</strong> {personalityNumber} - {personalityMeanings[personalityNumber]}
        </p>
        <p className="text-lg mb-4">
          <strong>Soul Urge Number:</strong> {soulUrgeNumber} - {soulUrgeMeanings[soulUrgeNumber]}
        </p>
        <p className="text-lg mb-4">
          <strong>Zodiac Sign:</strong> {zodiacSign}
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-4">Life Summary and Recommendations</h3>
          <p className="text-lg mb-4">
            Based on your numerology profile, your Life Path Number indicates that you are meant to {getLifePathSummary(lifePathNumber)}.
          </p>
          <p className="text-lg mb-4">
            Career-wise, you should consider roles in {getCareerAdvice}. These careers align with your strengths and passions.
          </p>
          <p className="text-lg mb-4">
            In relationships, focus on {getRelationshipAdvice}. This will help you create and maintain harmonious and fulfilling connections.
          </p>
          <p className="text-lg mb-4">
            Overall, embrace your strengths in {getStrengths(lifePathNumber)} and work on overcoming challenges related to {getChallenges(lifePathNumber)} to achieve a balanced and successful life.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Results;
