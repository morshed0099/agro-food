import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { riceCategoryService } from './riceCategory.service';

const createCategory = catchAsync(async (req, res) => {
  const riceCategoryInfo = req.body;
  const result = await riceCategoryService.createRiceCategory(riceCategoryInfo);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'rice category created successfully !!',
    data: result,
  });
});

export const riceCategoryControler = {
  createCategory,
};
