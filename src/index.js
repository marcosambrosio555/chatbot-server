import express from 'express'
const app = express()
import cors from 'cors'
import { generateResponse } from './generateResponse.js'

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { prompt } = req.body;
    const response = await generateResponse(prompt);
    res.json({ response });
});

const port = 4440;
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})