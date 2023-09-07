import express from "express";
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import customerRoutes from './routes/customer.routes.js'

import cors from 'cors';

const app = express();
app.use(cors({
    origin:'http://localhost:3000',
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api',customerRoutes);


export default app;