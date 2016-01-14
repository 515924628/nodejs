"use strict";

var router = require("express").Router();

router.route("/").get(function (req, res) {
	res.render("login");
}).post(function (_ref, res) {
	var body = _ref.body;
	var session = _ref.session;
	var cookies = _ref.cookies;

	console.log("login " + cookies);
	if (body.username) {
		session.username = body.username;
		res.jsonp({ state: "success" });
	} else {
		res.send("登陆失败");
	}
});

module.exports = router;