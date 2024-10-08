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

console.log(llm.invoke([{ role: "user", content: "Hi im bob" }]));
