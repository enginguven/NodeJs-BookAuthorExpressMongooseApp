const winston = require("winston");
//const bookValidation = require("../validations/bookValidation");

function bookAuthorController(BookAuthor, Author) {
  async function getAuthors(req, res) {
    winston.info(BookAuthor);
    const bookAuthors = await BookAuthor.find({ isbn: req.params.id }).select(
      "author_id -_id"
    );
    winston.info("bookAuthors:" + bookAuthors.map((m) => m.author_id));
    const authors = await Author.find()
      .where("author_id")
      .in(bookAuthors.map((m) => m.author_id))
      .exec();

    return res.send(authors);
  }

  return { getAuthors };
}

module.exports = bookAuthorController;
