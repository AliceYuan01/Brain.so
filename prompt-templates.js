import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

// Import environment variables
import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    modelName: "gpt-4o",
    temperature: 0.7,
});

// Format the prompt in a specific way
const prompt = ChatPromptTemplate.fromTemplate('You are a comedian. Tell a joke based on the following word {input}')

// Create chain
const chain = prompt.pipe(model);

const response = await chain.invoke({
    input: "dog",
})

console.log(response);