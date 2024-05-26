import httpStatus from 'http-status';
import { catchAsync } from '../../midleware/catchAsync';
import { userService } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const userInfo = req.body;
  const result = await userService.createUser(userInfo);
  res.status(httpStatus.CREATED).json({
    success: true,
    message: 'user created successfully !!',
    data: result,
  });
});

export const userControler = {
  createUser,
};
