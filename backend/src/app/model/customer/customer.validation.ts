import { z } from 'zod';

const createCustomerSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'customer name is requied !!' }),
    address: z.string({ required_error: 'customer address is requied !!' }),
    phoneNumber: z.string({
      required_error: 'customer phone number is requied',
    }),
  }),
});

export const customerValidation = {
  createCustomerSchema,
};
