import { model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  photo?: string;
};

export interface userModel extends TUser {
  isExsits(email: string): Promise<TUser | null>;
}
