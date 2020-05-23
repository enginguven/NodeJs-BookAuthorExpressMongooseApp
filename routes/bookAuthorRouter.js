const express = require("express");
const bookAuthorController = require("../controllers/bookAuthorController");

function bookAuthorRouter(BookAuthor, Author) {
  const router = express.Router();
  const controller = bookAuthorController(BookAuthor, Author);
  router.route("/:id").get(controller.getAuthors);
  return router;
}
module.exports = bookAuthorRouter;
