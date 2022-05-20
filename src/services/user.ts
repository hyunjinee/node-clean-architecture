import { UserModel } from '@models/user';

export const createUser = async (user) => {
  return UserModel.create(user);
};
