const router = require("express").Router();
const session = require("../controllers/Session.js");

router.route("/players")
	.post(session.begin_session);

router.route("/hole/:id")
	.get(session.begin_hole)
	.post(session.end_hole)

module.exports = router;
