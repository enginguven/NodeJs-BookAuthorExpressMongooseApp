const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookAuthorModel = new Schema({
  isbn: { type: Number, min: 0, max: 100, required: true },
  author_id: { type: Number, min: 0, max: 100, required: true },
});

module.exports = mongoose.model("BookAuthor", bookAuthorModel);
