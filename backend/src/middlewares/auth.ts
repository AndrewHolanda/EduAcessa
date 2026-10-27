import type { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { HttpError } from '../utils/httpError';

// Only lets the request continue if it carries a valid token
// Expected header -> Authorization: Bearer <token>
export const requireAuth: RequestHandler = (req, res, next) => {
  const [type, token] = (req.headers.authorization ?? '').split(' ');

  if (type !== 'Bearer' || !token) {
    throw new HttpError(401, 'Faça login para continuar');
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret) as jwt.JwtPayload;
    res.locals.userId = Number(payload.sub);
    next();
  } catch {
    throw new HttpError(401, 'Sessão expirada. Faça login novamente');
  }
};
