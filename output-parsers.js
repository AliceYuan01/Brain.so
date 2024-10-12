import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers"

// Import environment variables
import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    modelName: "gpt-4o",
    temperature: 0.7,
});

async function callStringParser(){
// Format the prompt in a specific way (Create Prompt Template)
const prompt = ChatPromptTemplate.fromTemplate('You are a comedian. Tell a joke based on the following word {input}')

// Create parser
const parser = new StringOutputParser();

// Create chain
const chain = prompt.pipe(model).pipe(parser);

return await chain.invoke({
    input: "dog",
})
}

const response = await callStringParser()
console.log(response);