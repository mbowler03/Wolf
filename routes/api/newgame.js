const router = require("express").Router();
const wolfController = require("../../controllers/gameController");
const restController = require("../../controllers/restController");


router.route("/")
  .get(wolfController.findAll)
  .post(wolfController.create)
  .post(restController.create)
router
  .route("/:id")
  .get(wolfController.findById)
  .put(wolfController.update)
  .delete(wolfController.remove);

module.exports = router;