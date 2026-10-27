import { Pool } from 'pg';
import { env } from '../config/env';
import { HttpError } from '../utils/httpError';

// A pool reuses database connections instead of opening a new one on every request
export const pool = env.databaseUrl
  ? new Pool({ connectionString: env.databaseUrl })
  : null;

// Prevents the server from crashing if an idle connection drops
pool?.on('error', (err) => {
  console.error('Unexpected database error:', err.message);
});

// Returns the pool, or a clear error if DATABASE_URL was not set
export function getPool(): Pool {
  if (!pool) {
    throw new HttpError(503, 'Banco de dados não configurado. Preencha DATABASE_URL no .env.');
  }
  return pool;
}

export async function checkDatabase(): Promise<boolean> {
  if (!pool) return false;

  try {
    await pool.query('SELECT 1');
    return true;
  } catch {
    return false;
  }
}
