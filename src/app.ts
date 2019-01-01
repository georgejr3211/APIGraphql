import { makeExecutableSchema } from 'graphql-tools';
import 'reflect-metadata';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

import schema, { resolvers } from './graphql/schema';
import { userAuthenticate } from './middlewares/auth';

class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {

    this.express.use('/graphql',
      userAuthenticate(),

      graphqlHTTP((req) => ({
        schema: schema,
        // rootValue: resolvers,
        graphiql: process.env.NODE_ENV === 'development',
        context: req['context']
      }))

    );

  }

}

export default new App().express;