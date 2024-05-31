import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { dailyEarnService } from './dailyEarn.service';

const createDailyEarn = catchAsync(async (req, res) => {
  const dailyEarnInfo = req.body;
  const result = await dailyEarnService.createDailyEarn(dailyEarnInfo);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'daily earn created successfully !!',
    data: result,
  });
});

export const dailyEarnControler = {
  createDailyEarn,
};
