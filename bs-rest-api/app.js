const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

let books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
];

// Root
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our book store api" });
});

//Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

//Get a book by id
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);

  if (book) {
    res.status(200).json(book);
  } else {
    res
      .status(404)
      .json({ message: "Book not found, Please try with another one" });
  }
});

// Add new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };

  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "New book added succesfully",
  });
});

//Update a book
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const findCurrentBook = books.find((book) => book.id === id);

  if (findCurrentBook) {
    findCurrentBook.title = "The Lord of the rings";
    res
      .status(200)
      .json({ message: `Book with id: ${id} updated`, data: findCurrentBook });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete book
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const findIndexOfCurrentBook = books.findIndex((item) => item.id === id);

  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res
      .status(200)
      .json({ message: "Book deleted succesfully", data: deletedBook });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
