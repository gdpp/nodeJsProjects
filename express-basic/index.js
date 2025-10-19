const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (request, response) => {
  response.send("Hi im gdpp!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
