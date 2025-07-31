// src/api/geminiApiBackend.js
import axios from 'axios';

export const geminiApiBackend = async (userInput) => {
  try {
    const response = await axios.post('http://localhost:8000/api/content', {
      userInput,
    });
    return response.data.reply;
  } catch (error) {
    console.error('Chatbot backend error:', error);
    return 'Oops! Failed to fetch reply.';
  }
};
