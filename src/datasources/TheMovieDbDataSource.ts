import { RESTDataSource } from 'apollo-datasource-rest';
import to from 'await-to-js';

export class TheMovieDbDataSource extends RESTDataSource {
  baseURL = 'https://api.themoviedb.org/'; // TODO: move to env

  willSendRequest(request) {
    console.log('request: ', request);
  }

  async searchMovies(searchPhrase: string) {
    const [error, data] = await to(this.get('/3/search/movie', {
      api_key: '25ef7a17f865553a28f09aab4124a8ac', // TODO: move to env
      query: searchPhrase,
    }));

    if (error) {
      throw error;
    }

    return data.results;
  }
}
