import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { TheMovieDbDataSource } from './datasources/TheMovieDbDataSource';

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      theMovieDbApi: new TheMovieDbDataSource(),
    }),
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 apollo server listening at ${url}`);
  });
};

startServer().catch((error: Error) => {
  console.error(error);
});
