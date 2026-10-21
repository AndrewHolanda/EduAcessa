import { Router } from 'express';
import { checkDatabase } from '../db';

export const healthRouter = Router();

// GET /api/health -> checks if the API and the database are working
healthRouter.get('/', async (_req, res) => {
  const databaseConnected = await checkDatabase();

  res.json({
    status: 'ok',
    database: databaseConnected ? 'connected' : 'disconnected',
  });
});
