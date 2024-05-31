import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { dailyCostService } from './dailyCost.service';

const createDailyCost = catchAsync(async (req, res) => {
  const costInfo = req.body;
  const result = await dailyCostService.crateDailyCost(costInfo);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'daily cost created successfully !!',
    data: result,
  });
});

export const dailyCostControler = {
  createDailyCost,
};
