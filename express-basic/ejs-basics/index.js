const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

const user = {
  name: "gdpp",
  qty: 3,
};

app.get("/", (req, res) => {
  res.render("home", { title: "Home", user });
});
