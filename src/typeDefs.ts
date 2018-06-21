import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Movie {
    id: Int!
    original_title: String!
    budget: Int
    overview: String
    popularity: Float
    poster_path: String
    release_date: String
    vote_count: Float
  }

  type Query {
    books: [Book]
    searchMovies(query: String!): [Movie]
    getMovie(movieId: Int!): Movie!
  }
`;
