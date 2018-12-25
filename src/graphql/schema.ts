import { makeExecutableSchema } from 'graphql-tools';
const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello GraphQL';
    }
  }
}

export default makeExecutableSchema({ typeDefs, resolvers });