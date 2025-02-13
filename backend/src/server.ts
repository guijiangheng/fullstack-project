import cookieParser from 'cookie-parser';
import express from 'express';

import { authRouter } from './routes/auth';

export const app = express();

app.use(express.json());
app.use(cookieParser())

app.use('/api/auth', authRouter)