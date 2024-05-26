import { z } from 'zod';

const createUserValidation = z.object({
  body: z.object({
    email: z.string({ required_error: 'email is requied' }).email(),
    name: z.string({ required_error: 'name is requied' }).min(3),
    password: z
      .string({ required_error: 'password is requied' })
      .min(4, { message: 'password not lessten 3' }),
    photo: z.string().optional(),
  }),
});

export const userValidation = {
  createUserValidation,
};
