// src/Chatbot.js
import React from 'react';
import { ChatBot } from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// Define the chatbot steps (conversation flow)
const steps = [
  {
    id: '1',
    message: 'Hello! What is your name?',
    trigger: 'name',
  },
  {
    id: 'name',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    message: 'Hi {previousValue}, how can I assist you today?',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: 'faq', label: 'FAQ', trigger: 'faq' },
      { value: 'support', label: 'Talk to Support', trigger: 'support' },
    ],
  },
  {
    id: 'faq',
    message: 'You can check our FAQ section at www.example.com/faq.',
    end: true,
  },
  {
    id: 'support',
    message: 'Please contact our support team at support@example.com.',
    end: true,
  },
];

// Optional: Define a custom theme for the chatbot
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#00B2A9',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00B2A9',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
}

export default Chatbot;
