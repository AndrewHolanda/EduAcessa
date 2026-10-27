import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { errorHandler } from './middlewares/errorHandler';

export const app = express();

app.use(cors()); // allows the mobile and web app to call this API
app.use(express.json()); // reads JSON sent in the request body

app.use('/api', routes);

// Any route that does not exist
app.use((_req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use(errorHandler);
