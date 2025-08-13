import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import authRoutes from './routes/authRoutes.ts';
import userRoutes from './routes/userRoutes.ts';
import habitRoutes from './routes/habitRoutes.ts';
import { isTest } from '../env.ts';

const app = express();

// Will call these middlewares on any route
app.use(helmet());
app.use(cors());
app.use(
  morgan('dev', {
    skip: () => isTest(),
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes);

app.use('/api/habits', habitRoutes);

export { app };

export default app;
