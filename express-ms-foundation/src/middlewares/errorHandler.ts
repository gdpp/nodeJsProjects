import { NextFunction, Request, RequestHandler, Response } from "express";

class APIError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "APIError"; // set the error type to API Error
  }
}

export const asyncHandler =
  <T extends RequestHandler>(fn: T): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export const globalErrorHandler = (
  err: APIError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    });
  }
};
