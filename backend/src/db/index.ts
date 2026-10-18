import { Pool } from 'pg';
import { env } from '../config/env';

// A pool reuses database connections instead of opening a new one on every request
export const pool = env.databaseUrl
  ? new Pool({ connectionString: env.databaseUrl })
  : null;

// Prevents the server from crashing if an idle connection drops
pool?.on('error', (err) => {
  console.error('Unexpected database error:', err.message);
});

export async function checkDatabase(): Promise<boolean> {
  if (!pool) return false;

  try {
    await pool.query('SELECT 1');
    return true;
  } catch {
    return false;
  }
}
