const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookModel = new Schema({
  isbn: { type: Number, min: 0, max: 100, required: true },
  book_title: { type: String, min: 5, max: 25, required: true },
  publish_date: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Book", bookModel);
