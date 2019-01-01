import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas';

import { AuthDirective } from './auth/auth.directive';

const typesArray = fileLoader(__dirname + '/**/*.graphql.*');
const resolversArray = fileLoader(__dirname + '/**/*.resolver.*', {
  extensions: ['.js', '.ts'],
  recursive: true
});

export const typeDefs = mergeTypes(typesArray);
export const resolvers = mergeResolvers(resolversArray);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuthDirective
  }
});