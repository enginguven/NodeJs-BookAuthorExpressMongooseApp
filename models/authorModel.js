const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorModel = new Schema({
  author_id: { type: Number, min: 0, max: 100, required: true },
  first_name: { type: String, min: 5, max: 25, required: true },
  last_name: { type: String, min: 5, max: 25, required: true },
});

module.exports = mongoose.model("Author", authorModel);
