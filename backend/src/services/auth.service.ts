import bcrypt from 'bcryptjs';
import jwt, { type SignOptions } from 'jsonwebtoken';
import { env } from '../config/env';
import { getPool } from '../db';
import { HttpError } from '../utils/httpError';
import type { LoginInput, RegisterInput } from '../schemas/auth.schemas';

type UserRow = {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  school: string;
  role: 'student' | 'teacher';
  grade_year: number | null;
  subject: string | null;
  phone: string | null;
  created_at: Date;
};

// What the app receives about a user. The password is never sent back
function toPublicUser(row: UserRow) {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    school: row.school,
    role: row.role,
    gradeYear: row.grade_year,
    subject: row.subject,
    phone: row.phone,
    createdAt: row.created_at,
  };
}

// The token works like a badge: the app stores it and sends it on every request
function createToken(userId: number): string {
  return jwt.sign({ sub: String(userId) }, env.jwtSecret, {
    expiresIn: env.jwtExpiresIn as SignOptions['expiresIn'],
  });
}

export async function registerUser(input: RegisterInput) {
  // Turns the password into an irreversible hash before saving it
  const passwordHash = await bcrypt.hash(input.password, 10);

  try {
    const { rows } = await getPool().query<UserRow>(
      `INSERT INTO users
         (name, email, password_hash, school, role, grade_year, subject, phone, accepted_terms_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
       RETURNING *`,
      [
        input.name,
        input.email,
        passwordHash,
        input.school,
        input.role,
        input.role === 'student' ? input.gradeYear : null,
        input.role === 'teacher' ? input.subject : null,
        input.phone || null,
      ],
    );

    const user = rows[0];
    return { token: createToken(user.id), user: toPublicUser(user) };
  } catch (err) {
    // 23505 is the PostgreSQL code for "this value already exists" (email is UNIQUE)
    if ((err as { code?: string }).code === '23505') {
      throw new HttpError(409, 'Este e-mail já está cadastrado');
    }
    throw err;
  }
}

export async function loginUser(input: LoginInput) {
  const { rows } = await getPool().query<UserRow>(
    'SELECT * FROM users WHERE email = $1',
    [input.email],
  );
  const user = rows[0];

  // Same message for a wrong email or a wrong password,
  // so nobody can find out which emails are registered
  const passwordMatches = user && (await bcrypt.compare(input.password, user.password_hash));
  if (!passwordMatches) {
    throw new HttpError(401, 'E-mail ou senha inválidos');
  }

  return { token: createToken(user.id), user: toPublicUser(user) };
}

export async function getUserById(id: number) {
  const { rows } = await getPool().query<UserRow>('SELECT * FROM users WHERE id = $1', [id]);
  if (!rows[0]) {
    throw new HttpError(404, 'Usuário não encontrado');
  }
  return toPublicUser(rows[0]);
}
