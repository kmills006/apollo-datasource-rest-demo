import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const { env } = process;

export const THE_MOVIE_DB_API_KEY = env.THE_MOVIE_DB_API_KEY;
export const THE_MOVIE_DB_BASE_URL = env.THE_MOVIE_DB_BASE_URL;
