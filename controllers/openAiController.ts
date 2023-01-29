import { Request, Response } from 'express';
import { Configuration, OpenAIApi } from 'openai';
import ApiResponse from '../ApiResponse';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openAi = new OpenAIApi(configuration);

export const generateImage = async (req: Request, res: Response) => {
    const { prompt, size } = req.body;
    const imageSize = size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';
    try {
        const response = await openAi.createImage({
            prompt,
            n: 1,
            size: imageSize,
        });
        const imageUrl = response.data.data[0].url;
        res.status(200).json({
            data: { imageUrl },
        })
    } catch (error) {
        const response = new ApiResponse('failure', -1001, `The image could not be generated: ${error}.`);
        res.status(400).json({
            data: response,
        })
    }
};
