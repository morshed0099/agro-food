import { Schema, model } from 'mongoose';
import { TUser, userModel } from './user.interface';
import confing from '../../confing';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'email is required'],
    },
    name: {
      type: String,
      minlength: [3, 'name should not less then 3 carecter'],
      trim: true,
      maxlength: [50, 'name lengthe will not be gether then 50 carecter'],
      required: [true, 'name is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minlength: [4, 'password not will be less than 4 carecter'],
      select: 0,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  const password = this.password;
  this.password = await bcrypt.hash(password, Number(confing.salt_round));
  next();
});
export const User = model<TUser>('User', userSchema);
