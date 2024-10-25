// src/components/Chatbot.tsx
import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY =
    "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"; // Ensure this is set correctly

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage: Message = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setLoading(true);

    try {
      const response = await axios.post(
        API_URL,
        {
          model: "gpt-4",
          messages: [{ role: "user", content: userInput }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botResponse: Message = {
        sender: "bot",
        text: response.data.choices[0].message.content,
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error("Error fetching response from OpenAI API:", error);
      const botError: Message = {
        sender: "bot",
        text: "Sorry, I encountered an error. Please try again later.",
      };
      setMessages((prevMessages) => [...prevMessages, botError]);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        {loading && <div className="message bot">Typing...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
