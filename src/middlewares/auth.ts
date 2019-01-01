import { Request, Response, NextFunction } from "express";

import * as jwt from 'jsonwebtoken';
import { KEY_SECRET } from "../config/keys";
import { User } from './../models/user.model';

export function userAuthenticate() {
  return (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.get('x-access-token');
    const token: string = authorization ? authorization : undefined;

    req['context'] = {};

    if (!token) {
      return next();
    }

    jwt.verify(token, KEY_SECRET, async (err, decoded: any) => {

      if (err) { return next(); }

      const userDecoded = decoded.user;

      const findUser = await User.findOne(userDecoded.id);

      if (findUser) {
        req['context']['token'] = findUser;
      }

      return next();

    });

  }
};