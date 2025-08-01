// src/api/geminiApiBackend.js
import axios from 'axios';
// backend API URL from .env file
const API = import.meta.env.VITE_API_URL;

export const geminiApiBackend = async (userInput) => {
  try {
    // /api/content
    const response = await axios.post(`${API}/api/content`, {
      userInput,
    });
    return response.data.reply;
  } catch (error) {
    console.error('Chatbot backend error:', error);
    return 'Oops! Failed to fetch reply.';
  }
};
