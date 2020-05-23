const Joi = require("joi");
function validationAuthor(author) {
  const schema = {
    first_name: Joi.string().min(5).required(),
    last_name: Joi.string().min(5).required(),
    auhtor_id: Joi.number().min(0).required(),
  };

  return Joi.validate(author, schema);
}

module.exports = validationAuthor;
