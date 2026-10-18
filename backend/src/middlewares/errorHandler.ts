import type { ErrorRequestHandler } from 'express';

// Catches any error thrown inside a route and returns a standard JSON response
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
};
