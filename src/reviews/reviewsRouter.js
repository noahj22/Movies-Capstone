const router = require("express").Router({ mergeParams: true });
const controller = require("./reviewsController");
const methodNotAllowed = ("../errors/methodNotAllowed");

router.route("/").get(controller.list);

router
.route("/:reviewId([0-9]+")
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed);

module.exports = router;