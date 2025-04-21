import User from '../models/user.model';
import bcrypt from 'bcryptjs';

export const createUser = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({ ...data, password: hashedPassword });
  return user.save();
};

export const getAllUsers = async () => {
  return User.find();
};
