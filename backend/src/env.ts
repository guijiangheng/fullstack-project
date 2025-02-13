import { z } from 'zod';

import { createEnv } from '@t3-oss/env-core';

export const env = createEnv({
  server: {
    // Database
    DB_PASSWORD: z.string().min(6),
    DB_USER: z.string().min(1),
    DB_NAME: z.string().min(1),
    DB_HOST: z.string().min(1),

    PORT: z.coerce.number().min(1).max(65535),
  },
  runtimeEnv: process.env
})
