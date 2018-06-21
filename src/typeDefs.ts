import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Movie {
    id: Int!
    original_title: String!
    overview: String
    release_date: String
    vote_count: Int
    poster_path: String
  }

  type Query {
    books: [Book]
    searchMovies(title: String): [Movie]
  }
`;
