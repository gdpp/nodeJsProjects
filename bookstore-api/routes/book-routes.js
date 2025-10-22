const express = require("express");

// create Express router

const router = express.Router();

// all the routes that are related with books only

router.get("/books");
router.get("/books/:id");
router.post("/books");
router.put("/books/:id");
router.delete("/books/:id");
