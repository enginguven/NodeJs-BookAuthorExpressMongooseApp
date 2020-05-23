const express = require("express");
const authorController = require("../controllers/authorController");

function authorRouter(Author) {
  const router = express.Router();
  const controller = authorController(Author);
  router.route("/").get(controller.get).post(controller.post);
  router.route("/:id").get(controller.getById).delete(controller.remove);
  return router;
}
module.exports = authorRouter;
