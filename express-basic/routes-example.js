const express = require("express");

const app = express();
const port = 3000;

//root route
app.get("/", (req, res) => {
  res.send("Welcome to our main page");
});

// get all products route
app.get("/products", (req, res) => {
  const products = [
    { id: 1, label: "Product 1" },
    { id: 2, label: "Product 2" },
    { id: 3, label: "Product 3" },
    { id: 4, label: "Product 4" },
  ];

  res.json(products);
});

// get single product
app.get("/products/:id", (req, res) => {
  const prodId = parseInt(req.params.id);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
