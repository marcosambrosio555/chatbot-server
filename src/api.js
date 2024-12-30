import dotenv from "dotenv";
dotenv.config();

import Configuration from 'openai'
import OpenAIApi from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Ou outro modelo
            messages: [{ role: "user", content: prompt }],
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        return "error to get response.";
    }
}


export { generateResponse };




