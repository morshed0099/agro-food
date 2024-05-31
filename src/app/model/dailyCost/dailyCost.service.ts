import { Dailycost } from './dailyCost.module';
const crateDailyCost = async (payload: TDailyCost) => {
  console.log('hii')
  const result = await Dailycost.create(payload);
  return result;
};

export const dailyCostService = {
  crateDailyCost,
};
