import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { customerService } from './customer.service';

const createCustomer = catchAsync(async (req, res) => {
  const customerInfo = req.body;
  const result = await customerService.createCustomer(customerInfo);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'customer created successfully !!',
    data: result,
  });
});

export const customerContoler = {
  createCustomer,
};
