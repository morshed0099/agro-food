import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notfound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `${req.baseUrl} not found`,
    error: '',
  });
  next();
};

export default notfound;
