import { string, z } from 'zod';

const createRiceCatergoryValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'category name is required!!' }),
  }),
});

export const riceCategoryValidation = {
  createRiceCatergoryValidation,
};
