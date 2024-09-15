// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-10 bg-gray-100 text-gray-900 text-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">About This Project</h2>
        <p className="text-lg mb-4">
          This page was created by Rachit. You can view the source code and more information on my GitHub: 
          <a href="https://github.com/RachitSE" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            https://github.com/RachitSE
          </a>.
        </p>
        <p className="text-lg mb-4">
          The project was inspired by a small incident from an Excel sheet. The victims involved were Raaghav Agarwal and Neev Agarwal.
        </p>
      </div>
    </section>
  );
};

export default About;
