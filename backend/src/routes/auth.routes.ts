import { Router } from 'express';
import { requireAuth } from '../middlewares/auth';
import { loginSchema, registerSchema } from '../schemas/auth.schemas';
import { getUserById, loginUser, registerUser } from '../services/auth.service';

export const authRouter = Router();

// POST /api/auth/register -> creates an account and returns a token
authRouter.post('/register', async (req, res) => {
  const data = registerSchema.parse(req.body);
  const result = await registerUser(data);
  res.status(201).json(result);
});

// POST /api/auth/login -> checks email and password and returns a token
authRouter.post('/login', async (req, res) => {
  const data = loginSchema.parse(req.body);
  const result = await loginUser(data);
  res.json(result);
});

// GET /api/auth/me -> returns the logged-in user (used to keep the user logged in)
authRouter.get('/me', requireAuth, async (_req, res) => {
  const user = await getUserById(res.locals.userId);
  res.json({ user });
});
