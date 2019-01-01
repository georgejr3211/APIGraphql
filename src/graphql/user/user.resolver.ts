import { KEY_SECRET } from './../../config/keys';
import * as jwt from 'jsonwebtoken';
import { User } from "../../models/user.model";

export default {

  Query: {
    users: async (parent, args, context) => {
      const users = await User.find();
      return users;
    },

  },
  Mutation: {
    login: async (parent, { email, password }, context, info) => {

      const user = await User
        .createQueryBuilder('user')
        .where('email = :email', { email })
        .andWhere('password = :password', { password })
        .getOne();

      return jwt.sign({ user }, KEY_SECRET, { expiresIn: '3h' });

    },

    createUser: async (parent, { input }, { user }, info) => {

      console.log(input.email);

      const emailVerify = await User
        .createQueryBuilder('user')
        .where('email = :email', { email: input.email })
        .getOne();

      console.log(emailVerify);

      if (emailVerify) {
        throw new Error('Email already exists!');
      }

      return null;

    }

  },
}