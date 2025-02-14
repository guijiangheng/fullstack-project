import { db } from '@/drizzle/db';
import { MovieTable } from '@/drizzle/schema/movie';

export async function insertMovie(data: typeof MovieTable.$inferInsert) {
  const [newMovie] = await db.insert(MovieTable).values(data).returning()

  if (!newMovie) {
    throw new Error('Failed to insert movie')
  }

  return newMovie
}