const express = require("express");

const app = express();

// define mw function
const myMiddleware = (req, res, next) => {
  console.log("this first middleware will run on every request");
  next();
};

app.use(myMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000");
});
