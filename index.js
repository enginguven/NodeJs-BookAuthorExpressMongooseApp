const winston = require("winston");
var cors = require("cors");
require("./startups/logginWinstor")();
const db = require("./db/mongoose");
const Book = require("./models/bookModel");
const Author = require("./models/authorModel");
const BookAuthor = require("./models/bookAuthorModel");
const bookRouter = require("./routes/bookRouter")(Book);
const authorRouter = require("./routes/authorRouter")(Author);
const bookAuthorRouter = require("./routes/bookAuthorRouter")(
  BookAuthor,
  Author
);
const express = require("express");
const bodyParser = require("body-parser");
const error = require("./middleware/error");

const app = express();
db.connect();
const port = 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: `http://localhost:${3000}` }));
app.use(error);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/books/authors", bookAuthorRouter);
app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
  winston.info(`Running on port ${port}...`);
});
