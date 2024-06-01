import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { TCustKhotian } from './custKhotian.interface';
import { CustKhotian } from './custKhotian.model';
import { Customer } from '../customer/customer.model';

const createDebit = async (payload: Partial<TCustKhotian>) => {
  const customer = await Customer.findById(payload.customerId);

  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, 'customer accaount not forund');
  }

  const match = await CustKhotian.findOne({ customerId: customer._id }).sort(
    '-createdAt',
  );
  let debitData = {
    date: payload.date,
    debit: payload.debit,
    total: payload.debit,
    customerId: payload.customerId,
  };

  if (match) {
    const finalTotal = (match.total = match.total + (payload?.debit as number));
    debitData.total = finalTotal;
  }
  const result = await CustKhotian.create(debitData);
  const finalResut = await CustKhotian.find({
    customerId: customer._id,
  }).populate('customerId');
  return finalResut;
};

const createCaredit = async (payload: Partial<TCustKhotian>) => {
  const customer = await Customer.findById(payload.customerId);
  if (!customer) {
    throw new AppError(httpStatus.NOT_FOUND, 'customer accaount not forund');
  }
  const match = await CustKhotian.findOne({ customerId: customer._id }).sort(
    '-createdAt',
  );
  let creadit = {
    date: payload.date,
    credit: payload.credit,
    total: payload.credit,
    customerId: payload.customerId,
  };
  if (match) {
    console.log(match)
    const finalTotal = match.total - (payload?.credit as number);
    creadit.total = finalTotal;
    console.log(creadit)
  }
  const result = await CustKhotian.create(creadit);
  const finalResut = await CustKhotian.find({
    customerId: customer._id,
  }).populate('customerId');
  return finalResut;
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
