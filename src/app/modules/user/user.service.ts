import { TUser } from './user.interface';
import { User } from './user.model';

const createUserInToBD = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUsersInToBD = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserToBd = async (userId: string) => {
  const result = await User.findById(userId);
  return result;
};

const singleUserUpdeteToBd = async (
  userId: string,
  updateUser: Partial<TUser>,
) => {
  const result = await User.findByIdAndUpdate(userId, updateUser, {
    new: true,
  });
  return result;
};

const singleUserDeleteToBd = async (userId: string) => {
  const result = await User.findByIdAndDelete(userId);
  return result;
};

export const userService = {
  createUserInToBD,
  getAllUsersInToBD,
  getSingleUserToBd,
  singleUserUpdeteToBd,
  singleUserDeleteToBd,
};
