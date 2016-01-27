const router = require("express").Router();

router.route("/").get((req, res)=> {
	res.render("login");
}).post(({body, session}, res)=> {
	if (body.username) {
		session.username = body.username;
		res.json({"success": true, "info": "登陆成功"});
	} else {
		res.json({"success": false, "info": "登陆失败"});
	}
});

module.exports = router;