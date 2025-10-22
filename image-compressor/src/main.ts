import express from "express";

const app = express();

app.post("/", async (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
