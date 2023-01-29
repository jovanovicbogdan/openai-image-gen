import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express, { Express } from 'express';
import openAiRoutes from './routes/openAiRoutes';

const port: number = parseInt(process.env.PORT as string) || 8080;
const app: Express = express();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', openAiRoutes);

app.listen(port, () => console.log(`Server listening on ${port}.`));
