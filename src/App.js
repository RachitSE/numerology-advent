import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PredictionForm from './components/PredictionForm';
import Results from './components/Results';
import Footer from './components/Footer';
import AIGuru from './components/AIGuru';
import About from './components/About';
import {
  calculateLifePath,
  calculateDestinyNumber,
  calculatePersonalityNumber,
  calculateSoulUrgeNumber,
  calculateZodiacSign
} from './Numerology';

function App() {
  const [results, setResults] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

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

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return !results ? (
          <>
            <LandingPage />
            <PredictionForm onFormSubmit={handleFormSubmit} />
          </>
        ) : (
          <Results {...results} />
        );
      case 'aiguru':
        return <AIGuru />;
      case 'about':
        return <About />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="App">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
