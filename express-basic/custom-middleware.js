const express = require("express");
const app = express();

const requestTimestampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();

  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next();
};

app.use(requestTimestampLogger);
