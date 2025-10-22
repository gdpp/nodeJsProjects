require("dotenv").config();
const express = require("express");
const { connectToDb } = require("./database/db");

const app = express();

const PORT = process.env.PORT || 3000;

//connect to db
connectToDb();

// middleware express.json()
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
