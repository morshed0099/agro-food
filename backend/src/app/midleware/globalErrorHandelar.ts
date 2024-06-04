import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = 'something went wrong';
  let errorDetails = error;
  let errorMessage = error.message;

  if (error instanceof ZodError) {
    statusCode = 400;
    message = 'Validation error !!';
    errorMessage = error?.issues?.map((ele) => ele.message).toString();
  } else if (error?.name === 'ValidationError') {
    message = error?.name;
  } else if (error?.name === 'CastError') {
    message = 'Invalid ID';
    errorMessage = ` ${error.value} is not a valid ID !`;
    statusCode = 400;
  } else if (error.statusCode === 401) {
    res.status(401).json({
      success: false,
      message: 'Unauthorized Access',
      errorMessage:
        'You do not have the necessary permissions to access this resource.',
      errorDetails: null,
      stack: null,
    });
  } else if (error.statusCode === 400) {
    res.status(400).json({
      success: false,
      message: error.message,
      statusCode: 400,
      data: null,
    });
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails: error,
  });
  next();
};

export default globalErrorHandeler;
