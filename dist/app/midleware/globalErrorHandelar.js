"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandeler = (error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || 'something went wrong';
    let errorDetails = error;
};
exports.default = globalErrorHandeler;
