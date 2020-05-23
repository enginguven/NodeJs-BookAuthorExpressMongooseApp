const Joi = require("joi");
function validationBook(book) {
  const schema = {
    book_title: Joi.string().min(5).required(),
    publish_date: Joi.date().required(),
    isbn: Joi.number().min(0).required(),
  };

  return Joi.validate(book, schema);
}

module.exports = validationBook;
