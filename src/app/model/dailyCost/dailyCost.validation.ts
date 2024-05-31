import { z } from 'zod';

const createDailyCostValidation = z.object({
  body: z.object({
    description: z.string({ required_error: 'description is requied !!' }),
    amount: z.number({ required_error: 'amount is required !!' }),
    date: z.string({ required_error: 'date is requied' }),
  }),
});

export const dailyCostValidation = {
  createDailyCostValidation,
};
