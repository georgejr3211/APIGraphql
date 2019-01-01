import { makeExecutableSchema, SchemaDirectiveVisitor } from 'graphql-tools';
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas';
import { buildSchema, defaultFieldResolver } from 'graphql';
import { KEY_SECRET } from '../config/keys';
import { User } from '../models/user.model';
import * as jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';

const typesArray = fileLoader(__dirname + '/**/*.graphql');
const resolversArray = fileLoader(__dirname + '/**/*.resolver.*', {
  extensions: ['.js', '.ts'],
  recursive: true
});

export const typeDefs = mergeTypes(typesArray);
export const resolvers = mergeResolvers(resolversArray);

class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    field.resolve = (...args) => {
      const [, , ctx] = args;

    }
  }
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    upper: UpperCaseDirective
  }
});