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

import {
    START,
    END,
    MessagesAnnotation,
    StateGraph,
    MemorySaver,
  } from "@langchain/langgraph";
  
  // Define the function that calls the model
  const callModel = async (state: typeof MessagesAnnotation.State) => {
    const response = await llm.invoke(state.messages);
    return { messages: response };
  };
  
  // Define a new graph
  const workflow = new StateGraph(MessagesAnnotation)
    // Define the node and edge
    .addNode("model", callModel)
    .addEdge(START, "model")
    .addEdge("model", END);
  
  // Add memory
  const memory = new MemorySaver();
  const app = workflow.compile({ checkpointer: memory });

import { v4 as uuidv4 } from "uuid";

const config = { configurable: { thread_id: uuidv4() } };

const input = [
    {
      role: "user",
      content: "Hi! I'm Bob.",
    },
  ];
  const output = await app.invoke({ messages: input }, config);
  // The output contains all messages in the state.
  // This will long the last message in the conversation.
  console.log(output.messages[output.messages.length - 1]);