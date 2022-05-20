import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { createUser } from '@services/user';

const { CONFLICT, INTERNAL_SERVER_ERROR, CREATED } = StatusCodes;

export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    await createUser({ username, email, password });

    return res.status(CREATED).send('user created successfully');
  } catch (error) {
    if (error.code === 11000) {
      // unique user exists
      return res.status(CONFLICT).send('User already exists');
    }

    return res.status(INTERNAL_SERVER_ERROR).send(error.message);
  }
};
