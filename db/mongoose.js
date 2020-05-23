const mongoose = require("mongoose");

function dbController() {
  function connect() {
    mongoose
      .connect("mongodb://localhost/bookauthor", { useNewUrlParser: true })
      .then(() => console.log("Connected to MongoDB..."))
      .catch((err) => console.log(err));
  }
  return {
    connect,
  };
}
module.exports = dbController();
