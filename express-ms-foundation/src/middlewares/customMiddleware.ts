import { NextFunction, Request, Response } from "express";

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.get("User-Agent");

  console.log(`[${timestamp}] ${method} ${url} - ${userAgent}`);

  next();
};

export const addTimeStamp = (req: any, res: Response, next: NextFunction) => {
  req.timeStamp = new Date().toISOString();

  next();
};
