import { pgTable, text } from 'drizzle-orm/pg-core';

import { createdAt, id, updatedAt } from './helper';

export const UserTable = pgTable("users", {
  id,
  username: text().notNull().unique(),
  password: text().notNull(),
  createdAt,
  updatedAt,
});
