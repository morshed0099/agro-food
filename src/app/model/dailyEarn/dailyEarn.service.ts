import { TDailyEarn } from './dailyEarn.interface';
import { DailyEarn } from './dailyEarn.model';

const createDailyEarn = async (payload: TDailyEarn) => {
  const result = await DailyEarn.create(payload);
  return result;
};

export const dailyEarnService = {
  createDailyEarn,
};
