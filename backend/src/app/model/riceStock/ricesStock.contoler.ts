import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { riceStockSercie } from './riceStock.service';

const createRiceStock = catchAsync(async (req, res) => {
  const riceStockInfo = req.body;
  const result = await riceStockSercie.createRiceStock(riceStockInfo);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'rice stock created successfully !!',
    data: result,
  });
});

export const riceStockControler = {
  createRiceStock,
};
