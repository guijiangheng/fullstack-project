import { z } from 'zod';

import { insertMovie } from '@/repositories/movies';

const movieSchema = z.object({
  title: z.string().min(1).max(1000),
  year: z.number().int().min(1800),
  runtime: z.number().int().min(1),
  genres: z.array(z.string().min(1).max(100)).min(1),
})

export async function createMovie(movie: z.infer<typeof movieSchema>) {
  const { success, data, error } = movieSchema.safeParse(movie)

  if (!success) {
    return {
      error: true,
      message: error.toString(),
    }
  }

  const newMovie = await insertMovie(data)

  return {
    error: false,
    movie: newMovie,
  }
}