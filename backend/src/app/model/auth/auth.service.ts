import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { User } from '../user/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import confing from '../../confing';
import { TLogin } from './auth.interface';

const loginUser = async (payload: TLogin) => {
  console.log(payload, '2358');
  if (!payload.email || !payload.password) {
    throw new AppError(httpStatus.BAD_REQUEST, 'your credential is missing');
  }
  const user = await User.findOne({ email: payload.email }, '+ password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'user not found');
  }
  const passwordMatch = await bcrypt.compare(payload.password, user.password);
  if (!passwordMatch) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'your credential is not correct',
    );
  }

  const payloadUser = {
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign(payloadUser, confing.token_pass as string, {
    expiresIn: '1d',
  });

  return {
    name: user.name,
    id: user.id,
    email: user.email,
    token,
  };
};

export const authService = {
  loginUser,
};
