import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { dailyCostService } from '../dailyCost/dailyCost.service';
import { dayTotalServie } from './dayTotal.service';

const createDailyTotal = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await dayTotalServie.createDayTotal(payload);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'dailyTotal created successfully !!',
    data: result,
  });
});

export const dailyTotalControler = {
  createDailyTotal,
};
