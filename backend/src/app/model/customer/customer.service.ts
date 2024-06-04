import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { Customer } from './customer.model';

const createCustomer = async (payload: TCustomer) => {
  const existCustomer = await Customer.findOne({
    phoneNumber: payload.phoneNumber,
  });
  if (existCustomer) {
    throw new AppError(httpStatus.BAD_REQUEST, 'customer alredy exits !!');
  }
  const customer = await Customer.create(payload);
  return customer;
};

const getAllCustomer = async () => {
  const result = await Customer.find({});
  return result;
};

const getSingleCustomer = async (phoneNumber: string) => {
  const result = await Customer.findOne({ phoneNumber });
  if(!result){
    throw new AppError(httpStatus.NOT_FOUND,"user not phone ")
  }
  return result;
};

export const customerService = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
};
