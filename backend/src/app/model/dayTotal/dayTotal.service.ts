import moment from 'moment';
import { Dailycost } from '../dailyCost/dailyCost.module';
import { DailyEarn } from '../dailyEarn/dailyEarn.model';
import { DayTotal } from './dayTotal.model';

const createDayTotal = async (payload: any) => {
  payload.date = moment(payload.date, 'DD/MM/YYYY').valueOf();
  const currentDate = payload.date || Date.now();
  console.log(currentDate);
  let priviousDaytotal;
  const date = moment(currentDate).format('DD/MM/YYYY');

  priviousDaytotal = await DayTotal.find({});
  if (priviousDaytotal.length <= 0) {
    priviousDaytotal = 0;
  } else {
    const privousDay = moment(currentDate)
      .subtract(1, 'days')
      .format('DD/MM/YYYY');
    priviousDaytotal = await DayTotal.findOne({ date: privousDay });

    if (priviousDaytotal) {
      priviousDaytotal = priviousDaytotal.amount;
      console.log(priviousDaytotal);
    } else {
      priviousDaytotal = 0;
    }
  }
  const dailyCost = await Dailycost.find({ date: date });
  const dailyEarn = await DailyEarn.find({ date: date });
  const cost = dailyCost.reduce((current, total) => {
    return current + total.amount;
  }, 0);
  const earn = dailyEarn.reduce((current, total) => {
    return current + total.amount;
  }, 0);
  const total = earn - cost;
  const dailyTotal = {
    date,
    amount: total,
  };
  let result;
  const oldData = await DayTotal.find({ date: date });
  console.log(oldData);
  if (oldData.length == 0) {
    result = await DayTotal.create(dailyTotal);
  } else {
    result = await DayTotal.updateOne(
      {
        date: date,
      },
      dailyTotal,
    );
    const newData = await DayTotal.find({ date: date });
    return {
      priviousDaytotal,
      dailyCost,
      dailyEarn,
      earn,
      cost,
      newData,
    };
  }

  return {
    priviousDaytotal,
    dailyCost,
    dailyEarn,
    earn,
    cost,
    result,
  };
};

export const dayTotalServie = {
  createDayTotal,
};
