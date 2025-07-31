import React, { useState } from 'react';
import { geminiApiBackend } from '../../api/geminiApiBackend';
import './ChatBot.css';

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const toggleChat = () => setOpen(!open);

  const handleSend = async () => {
    if (!input.trim()) return;
    setError(null);
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);

    try {
      const botText = await geminiApiBackend(input);
      const botMsg = { role: 'bot', text: botText };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: 'Oops! Failed to fetch reply.' }
      ]);
      setError('Oops! Failed to fetch reply.');
    }

    setInput('');
  };

  return (
    <div className="chatbot-container">
      {open ? (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Shopsy Bot 🤖</span>
            <button onClick={toggleChat}>✖</button>
          </div>
          <div className="chatbox-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chatbox-message ${msg.role === 'user' ? 'user' : 'bot'}`}
              >
                {msg.text}
              </div>
            ))}
            {error && (
              <div className="chatbox-error">
                {error}
              </div>
            )}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={toggleChat}>
          💬
        </button>
      )}
    </div>
  );
}
