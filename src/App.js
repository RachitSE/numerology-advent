import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PredictionForm from './components/PredictionForm';
import Results from './components/Results';
import Footer from './components/Footer';
import About from './components/About'
import {
  calculateLifePath,
  calculateDestinyNumber,
  calculatePersonalityNumber,
  calculateSoulUrgeNumber,
  calculateZodiacSign
} from './Numerology'; // Import all numerology functions

function App() {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (data) => {
    const lifePathNumber = calculateLifePath(data.dob);
    const destinyNumber = calculateDestinyNumber(data.name);
    const personalityNumber = calculatePersonalityNumber(data.name);
    const soulUrgeNumber = calculateSoulUrgeNumber(data.name);
    const zodiacSign = calculateZodiacSign(data.dob);

    setResults({
      name: data.name,
      lifePathNumber,
      destinyNumber,
      personalityNumber,
      soulUrgeNumber,
      zodiacSign,
    });
  };

  

  return (
    <div className="App">
      <Navbar />
      {!results ? (
        <>
          <LandingPage />
          <PredictionForm onFormSubmit={handleFormSubmit} />
        </>
      ) : (
        <Results {...results} />
      )}
      <About />
      <Footer />
    </div>
  );
}

export default App;
