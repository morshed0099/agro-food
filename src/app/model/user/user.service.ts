import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';
import bcrypt from 'bcrypt';

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

const loginUser=async(payload:any)=>{

  if(!payload.email){
    throw new AppError(httpStatus.BAD_REQUEST,"your credential is missing")
  }
  const user = await User.findOne({email:payload.email})
  if(!user){
    throw new AppError(httpStatus.NOT_FOUND,'user not found')
  }
  const passwordMatch= await bcrypt.compare(payload.password,user.password)
  if(!passwordMatch){
    throw new AppError(httpStatus.BAD_REQUEST,"your credential is not correct")
  }
  return user
}

export const userService = {
  createUser,
  loginUser
};
