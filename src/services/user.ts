import { UserModel } from '@models/user';

export const createUser = async (user: any) => {
  return UserModel.create(user);
};
