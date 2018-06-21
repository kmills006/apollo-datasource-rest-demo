const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

export const resolvers = {
  Query: {
    books: () => books,

    getMovie: async (obj, { movieId }, { dataSources: { theMovieDbApi } }) => (
      theMovieDbApi.getMovie(movieId)
    ),

    searchMovies: async (obj, { query }, { dataSources: { theMovieDbApi } }) => (
      theMovieDbApi.searchMovies(query)
    ),
  },
};
