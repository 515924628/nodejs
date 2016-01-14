"use strict";

var router = require("express").Router();

router.route("/").get(function (req, res) {
	console.log(req.session.username);
	console.log("index:" + req.cookies.testapp);
	if (req.session.username) {
		res.render("index", { title: "radius的个人网站" });
	} else {
		res.redirect("/login");
	}
});

module.exports = router;