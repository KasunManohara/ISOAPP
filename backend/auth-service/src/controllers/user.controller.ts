import { Request, Response } from 'express';
import { createUser, getAllUsers } from '../services/user.service';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (_: Request, res: Response) => {
  const users = await getAllUsers();
  res.json(users);
};
