import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`GraphQL server is running at ${url}`);
});
