const router = require("express").Router();
const bandsController = require("../../controllers/bandsController");

// Matches with "/api/bands"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/bands/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
