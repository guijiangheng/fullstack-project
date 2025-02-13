import { defineConfig } from 'drizzle-kit';

import { env } from './src/env';

export default defineConfig({
  dialect: "postgresql",
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema/index.ts",
  strict: true,
  verbose: true,
  dbCredentials: {
    password: env.DB_PASSWORD,
    user: env.DB_USER,
    host: env.DB_HOST,
    database: env.DB_NAME,
    ssl: false
  }
})