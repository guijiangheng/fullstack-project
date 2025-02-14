import { pgEnum, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';

import { bytea } from './custom-types';
import { UserTable } from './user';

export const tokenScopes = ["authentication", "activation"] as const
export type TokenScope = typeof tokenScopes[number]
export const tokenScopeEnum = pgEnum("token_scope", tokenScopes)

export const TokenTable = pgTable("tokens", {
  hash: bytea().primaryKey(),
  userId: uuid()
    .notNull()
    .references(() => UserTable.id, { onDelete: 'cascade' }),
  scope: tokenScopeEnum().notNull(),
  expiry: timestamp({ withTimezone: true }).notNull(),
})