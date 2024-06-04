import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { custokerKhotianService } from './custKhotian.service';

const createDebit = catchAsync(async (req, res) => {
  const debit = req.body;
  const result = await custokerKhotianService.createDebit(debit);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'debit created success fully !!',
    data: result,
  });
});

const createCradit = catchAsync(async (req, res) => {
  const credit = req.body;
  const result = await custokerKhotianService.createCaredit(credit);
  res.status(httpStatus.OK).json({
    success: true,
    message: 'credit created successfully',
    data: result,
  });
});

const deuCustomer = catchAsync(async (req, res) => {
  const result = await custokerKhotianService.duePaymentCustomer();
  res.status(httpStatus.OK).json({
    success: true,
    message: 'all due customer information retive successfully !!',
    data: result,
  });
});

export const customerKhotianControler = {
  deuCustomer,
  createCradit,
  createDebit,
};
