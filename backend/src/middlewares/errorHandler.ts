import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { HttpError } from '../utils/httpError';

// Catches any error thrown inside a route and returns a standard JSON response
export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  // A field failed validation (e.g. invalid email)
  if (err instanceof ZodError) {
    res.status(400).json({
      error: 'Dados inválidos',
      details: err.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    });
    return;
  }

  // An error we threw on purpose, with its own status code
  if (err instanceof HttpError) {
    res.status(err.status).json({ error: err.message });
    return;
  }

  // The request body was not valid JSON
  if (err.type === 'entity.parse.failed') {
    res.status(400).json({ error: 'JSON inválido' });
    return;
  }

  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
};
