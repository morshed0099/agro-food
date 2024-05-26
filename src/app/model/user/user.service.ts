import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: TUser) => {
  if (payload.email) {
    const exitsUser = await User.findOne({ email: payload.email });
    if (exitsUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'user email alredy used');
    }
  }
  if (!payload.password) {
    throw new AppError(httpStatus.BAD_REQUEST, 'password is missing');
  }
  const user = await User.create(payload);
  return user;
};

export const userService = {
  createUser,
};
