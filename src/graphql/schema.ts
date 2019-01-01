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

class AuthDirective extends SchemaDirectiveVisitor {

  visitFieldDefinition(field) {
    field.resolve = (...args) => {
      const [, , auth] = args;

      const size = Object.keys(auth).length;

      if (!size) {
        throw new Error('Sem autorização, token inválido ou expirado. É necessário informar um token para ter acesso!');
      }

    }
  }

}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuthDirective
  }
});