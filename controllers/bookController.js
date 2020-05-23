const winston = require("winston");
const bookValidation = require("../validations/bookValidation");
const LogAndRaise = require("../utils/logandRaise");

function bookController(Book) {
  async function post(req, res) {
    const { error } = bookValidation(req.body);
    if (error) {
      return LogAndRaise(
        res,
        400,
        `Validation Book Error:${error.details[0].message}`
      );
    }
    try {
      const book = new Book(req.body);
      await book.save();
      res.status(201);
      return res.json(book);
    } catch (err) {
      LogAndRaise(res, 500, err.message);
    }
  }

  async function remove(req, res) {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);
      if (!book)
        return res
          .status(404)
          .send("The book with the given ID was not found.");
      res.send(book);
    } catch (err) {
      LogAndRaise(res, 500, err.message);
    }
  }
  async function get(req, res) {
    const books = await Book.find();
    const authorBooks = books.map((book) => {
      const newBook = book.toJSON();
      newBook.author = {};
      newBook.author.href = `http://${req.headers.host}/books/authors/${book.isbn}`;
      return newBook;
    });
    winston.info("sd " + authorBooks);
    return res.json(authorBooks);
  }
  async function getById(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book)
        return LogAndRaise(
          res,
          400,
          "The book with the given ID was not found"
        );
      return res.send(book);
    } catch (err) {
      LogAndRaise(res, 500, err.message);
    }
  }

  return { post, get, getById, remove };
}

module.exports = bookController;
