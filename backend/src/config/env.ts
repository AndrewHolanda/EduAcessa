// Loads the variables from the .env file into process.env
try {
  process.loadEnvFile();
} catch {
  // No .env file found: the default values below are used
}

export const env = {
  port: Number(process.env.PORT ?? 3333),
  databaseUrl: process.env.DATABASE_URL ?? '',
};
