"use strict";

var router = require("express").Router();

router.route("/").get(function (req, res) {
	res.render("login");
}).post(function (_ref, res) {
	var body = _ref.body;
	var session = _ref.session;

	if (body.username) {
		session.username = body.username;
		res.jsonp({ "success": true, "info": "登陆成功" });
	} else {
		res.jsonp({ "success": false, "info": "登陆失败" });
	}
});

module.exports = router;