import dotenv from 'dotenv';
dotenv.config();

import { ChatOpenAI } from "@langchain/openai";

// Model and randomness
// Instantiated (declare) llm
const llm = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
  temperature: 0
});

const result = await llm.invoke([
    { role: "user", content: "Hi! I'm Bob" },
    { role: "assistant", content: "Hello Bob! How can I assist you today?" },
    { role: "user", content: "What's my name?" },
  ]);
console.log(result['content'])
