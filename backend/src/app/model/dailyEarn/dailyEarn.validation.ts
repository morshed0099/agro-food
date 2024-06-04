import { z } from 'zod';

const createDailyEarnValidation = z.object({
  body: z.object({
    amount: z.number({ required_error: 'amount is requied !!' }),
    description: z.string({ required_error: 'decticription is requied !!' }),
    date: z.string({ required_error: 'date is requied !!' }),
  }),
});

export const dailyEarnValidation = {
  createDailyEarnValidation,
};
