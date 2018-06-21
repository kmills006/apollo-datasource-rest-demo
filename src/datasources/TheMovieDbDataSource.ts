import { RESTDataSource } from 'apollo-datasource-rest';
import to from 'await-to-js';
import { THE_MOVIE_DB_API_KEY, THE_MOVIE_DB_BASE_URL } from '../config';

export class TheMovieDbDataSource extends RESTDataSource {
  baseURL: string = THE_MOVIE_DB_BASE_URL;
  apiKey: string = THE_MOVIE_DB_API_KEY;

  async searchMovies(query: string) {
    const [error, data] = await to(this.get('/3/search/movie', {
      query,
      api_key: this.apiKey,
    }));

    if (error) {
      throw error;
    }

    return data.results;
  }

  async getMovie(movieId: number) {
    const [error, data] = await to(this.get(`/3/movie/${movieId}`, {
      api_key: this.apiKey,
    }));

    if (error) {
      throw error;
    }

    return data;
  }
}
