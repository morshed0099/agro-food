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
const getAllcustomer = catchAsync(async (req, res) => {
  const customer = await customerService.getAllCustomer();
  res.status(httpStatus.OK).json({
    success: true,
    message: 'all customer retive successfully !!',
    data: customer,
  });
});
const getSingleCustomer = catchAsync(async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const customer = await customerService.getSingleCustomer(phoneNumber);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'customer retive successfully !!',
    data: customer,
  });
});

export const customerContoler = {
  createCustomer,
  getSingleCustomer,
  getAllcustomer,
};
