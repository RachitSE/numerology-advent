import React, { useState } from 'react';

const PredictionForm = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && dob) {
      onFormSubmit({ name, dob });
    }
  };

  return (
    <section id="form" className="py-10 bg-white text-indigo-900">
      <div className="container mx-auto max-w-lg shadow-lg p-8 rounded-lg bg-indigo-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border border-indigo-300"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className="block font-semibold mb-2">Date of Birth</label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-2 rounded border border-indigo-300"
              required
            />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300" >
            Predict My Future
          </button>
        </form>
      </div>
    </section>
  );
}

export default PredictionForm;
