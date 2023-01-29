import express, { Request, Response, Router } from 'express';
import { generateImage } from '../controllers/openAiController';

const router: Router = express.Router();

router.post('/generate-image', generateImage);

export default router;
