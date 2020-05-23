const express = require("express");
const bookController = require("../controllers/bookController");

function bookRouter(Book) {
  const router = express.Router();
  const controller = bookController(Book);
  router.route("/").get(controller.get).post(controller.post);
  router.route("/:id").get(controller.getById).post(controller.remove);
  return router;
}
module.exports = bookRouter;
