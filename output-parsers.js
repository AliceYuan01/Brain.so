import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser, CommaSeparatedListOutputParser } from "@langchain/core/output_parsers";
import { StructuredOutputParser } from 'langchain/output_parsers';

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

async function callListOutputParsers() {
    const prompt = ChatPromptTemplate.fromTemplate(
        'Provide 5 synonyms, seperated by commas, for the following word {word}'
    )
    const outputParser = new CommaSeparatedListOutputParser();
    const chain = prompt.pipe(model).pipe(outputParser);
    return await chain.invoke({
        word: "happy",
    });
}

//Structured output parsers
async function callStructureParsers() {
    const prompt = ChatPromptTemplate.fromTemplate(
        `Extract information from the following phrase.
        Format Instructions: {format_instructions} 
        Phrase: {phrase}`
    )
    const outputParser = StructuredOutputParser.fromNameAndDescriptions({
        name: "the name of the person",
        age: "the age of the person",
    })
    const chain = prompt.pipe(model).pipe(outputParser);
    return await chain.invoke({
        phrase: "Max is 30 years old",
        format_instructions: outputParser.getFormatInstructions(),
    })
}

//const response = await callStringParser()
//const response = await callListOutputParsers()
const response = await callStructureParsers()
console.log(response);