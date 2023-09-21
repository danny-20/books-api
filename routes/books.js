const router = require("express").Router();
const Book = require("../models/Books");

//Create-add book
router.post("/", async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create book", error: error.message });
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
