import { Router } from 'express';
import { authRouter } from './auth.routes';
import { healthRouter } from './health.routes';

export const routes = Router();

routes.use('/health', healthRouter);
routes.use('/auth', authRouter);
