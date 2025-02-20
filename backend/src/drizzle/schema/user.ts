import { index, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const UserTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  username: text().notNull(),
  password: text().notNull(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
}, (table) => [
  index("username_index").on(table.username)
]);
