import { ErrorRequestHandler } from 'express';


const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'something went wrong';
  let errorDetails = error;

  res.status(statusCode).json({
    success: false,
    message,
    errorDetails,
  });
};

export default globalErrorHandeler;
