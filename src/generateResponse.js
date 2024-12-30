import dotenv from "dotenv";
dotenv.config();

import Configuration from 'openai'
import OpenAIApi from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function generateResponse(prompt){

    const completion = openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [
        { role : "user", content : prompt },
      ],
    });


    const result = await completion

    const answer = result.choices[0].message

    return answer;

}

export { generateResponse };
