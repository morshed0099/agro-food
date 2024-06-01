import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { TRiceStock } from './riceStock.interface';
import { RiceStock } from './ricetStock.model';

const createRiceStock = async (payload: TRiceStock) => {
  const exitsRiceStockk = await RiceStock.findOne({
    categoryId: payload.categoryId,
  }).sort('-createdAt');

  if (exitsRiceStockk) {
    if (!payload.addQuantity) {
      throw new AppError(httpStatus.BAD_REQUEST, 'add quantity is missing!!');
    }
    payload.quantity = exitsRiceStockk.quantity + payload.addQuantity!;
  } else {
    payload.quantity = payload?.addQuantity!;
  }
  const result = await RiceStock.create(payload);
  const finalResult = await RiceStock.find({
    categoryId: payload.categoryId,
  }).populate('categoryId');

  return finalResult;
};

const reduceStockRice = (payload: any) => {};

export const riceStockSercie = {
  createRiceStock,
};
