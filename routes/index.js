"use strict";

var router = require("express").Router();

router.route("/").get(function (req, res) {
	if (req.session.username) {
		res.render("index", { title: "radius的个人网站" });
	} else {
		res.redirect("/login");
	}
});
router.route("/action/:n").get(function (req, res) {
	res.set({ "Access-Control-Allow-Origin": "*" });
	res.send(req.params);
});

module.exports = router;