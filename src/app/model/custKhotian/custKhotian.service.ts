import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { TCustKhotian } from './custKhotian.interface';
import { CustKhotian } from './custKhotian.model';

const createDebit = async (payload: Partial<TCustKhotian>) => {
  const customer = await CustKhotian.findOne({
    customerId: payload.customerId,
  });
  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, 'customer accaount not forund');
  }
  customer.total = customer.total + (payload?.debit as number);
  const result = await CustKhotian.create(payload);
  return result;
};

const createCaredit = async (payload: Partial<TCustKhotian>) => {
  const customer = await CustKhotian.findOne({
    customerId: payload.customerId,
  });
  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, 'customer accaount not forund');
  }
  customer.total = customer.total - (payload?.credit as number);
  const result = await CustKhotian.create(payload);
  return result;
};
const duePaymentCustomer = async () => {
  const result = await CustKhotian.find({ total: { $lt: 0 } }).populate(
    'customerId',
  );
};
export const custokerKhotianService = {
  createDebit,
  createCaredit,
  duePaymentCustomer,
};
