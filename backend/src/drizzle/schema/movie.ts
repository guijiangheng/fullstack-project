import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

import { createdAt, updatedAt } from './helper';

export const MovieTable = pgTable("movies", {
  id: uuid().defaultRandom().primaryKey(),
  title: varchar({ length: 1000 }).notNull(),
  year: integer().notNull(),
  runtime: integer().notNull(),
  genres: varchar({ length: 100 }).array().notNull(),
  createdAt,
  updatedAt,
  version: integer().notNull().default(1),
})