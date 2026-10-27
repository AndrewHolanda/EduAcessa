import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getPool, pool } from './index';

// Creates the database tables from schema.sql (safe to run more than once)
async function main() {
  const sql = readFileSync(join(__dirname, 'schema.sql'), 'utf8');
  await getPool().query(sql);
  console.log('Database tables are ready.');
  await pool?.end();
}

main().catch((err) => {
  console.error('Failed to set up the database:', err.message);
  process.exit(1);
});
