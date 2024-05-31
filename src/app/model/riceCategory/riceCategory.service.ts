import httpStatus from 'http-status';
import AppError from '../../midleware/AppError';
import { TRiceCategory } from './riceCategory.interface';
import { RiceCategory } from './riceCategory.model';

const createRiceCategory = async (payload: TRiceCategory) => {
  const exits = await RiceCategory.findOne({ name: payload.name });
  if (exits) {
    throw new AppError(httpStatus.BAD_REQUEST, 'rice category allredy exits!!');
  }

  const riceCategory = await RiceCategory.create(payload);
  return riceCategory;
};

export const riceCategoryService = {
  createRiceCategory,
};
