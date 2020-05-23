const winston = require("winston");
const authorValidation = require("../validations/authorValidation");

function authorController(Author) {
  async function post(req, res) {
    const { error } = authorValidation(req.body);
    if (error) {
      const errMsg = `Validation Author Error:${error.details[0].message}`;
      winston.error(errMsg);
      return res.status(400).send(errMsg);
    }
    const author = new Author(req.body);
    author = await author.save();
    return res.status(201).json(author);
  }
  async function remove(req, res) {
    const author = await Author.findByIdAndRemove(req.params.id);
    if (!author)
      return res
        .status(404)
        .send("The author with the given ID was not found.");

    res.send(author);
  }
  async function get(req, res) {
    const authors = await Author.find();
    return res.send(authors);
  }
  async function getById(req, res) {
    const author = await Author.findById(req.params.id);
    if (!author)
      return res.status(404).send("The book with the given ID was not found.");
    res.send(author);
  }

  return { post, get, getById, remove };
}

module.exports = authorController;
