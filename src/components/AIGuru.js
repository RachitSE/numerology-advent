// AIGuru.js
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineSend, AiOutlineDelete } from 'react-icons/ai'; // Icons for send and clear buttons
import { fadeIn, slideUp } from '../animations/animationVariants'; // Custom animations
import { getGeminiResponse } from '../services/geminiApi'; // Updated API call function

const AIGuru = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  // Scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() && !loading) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setLoading(true);

      // Simulate typing indicator while waiting for the Gemini API response
      const typingMessage = { text: 'Typing...', sender: 'bot' };
      setMessages((prev) => [...prev, typingMessage]);

      try {
        console.log('User Input:', input); // Log user input
        // Get the response from the Gemini API
        const botResponse = await getGeminiResponse(input);
        console.log('Bot Response:', botResponse); // Log API response

        // Update the messages with the real response and remove typing
        setMessages((prev) => [
          ...prev.slice(0, -1), // Remove "Typing..."
          { text: botResponse, sender: 'bot' },
        ]);
      } catch (error) {
        console.error('Error during API call:', error);
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { text: 'Sorry, something went wrong. Please try again.', sender: 'bot' },
        ]);
      }
      setInput('');
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-indigo-200 to-purple-300 text-indigo-900"
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      {/* Header */}
      <header className="text-center py-4">
        <motion.h2
          className="text-4xl font-bold"
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          AI Guru: Your Astrology Guide
        </motion.h2>
      </header>

      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[65vh] bg-white rounded-lg shadow-lg mx-auto w-full max-w-3xl">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`p-4 rounded-lg ${
              message.sender === 'user'
                ? 'bg-indigo-100 self-end text-right'
                : 'bg-purple-200 self-start text-left'
            }`}
            variants={slideUp}
            initial="initial"
            animate="animate"
          >
            <p>{message.text}</p>
          </motion.div>
        ))}
        <div ref={chatRef}></div> {/* This keeps track of where to scroll */}
      </div>

      {/* Input Area */}
      <div className="bg-indigo-50 p-4 flex justify-between items-center shadow-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-3 rounded-lg border border-indigo-300"
          placeholder="Ask the AI Guru about your astrology..."
          disabled={loading} // Disable input while loading
        />
        <button
          onClick={handleSendMessage}
          className={`bg-indigo-600 text-white p-3 rounded-full ml-2 ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
          } transition duration-300`}
          disabled={loading}
        >
          <AiOutlineSend size={24} />
        </button>
        <button
          onClick={handleClearChat}
          className="bg-red-500 text-white p-3 rounded-full ml-2 hover:bg-red-600 transition duration-300"
        >
          <AiOutlineDelete size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default AIGuru;
