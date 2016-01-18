const router = require("express").Router();

router.route("/").get((req, res)=> {
	res.render("login");
}).post(({body, session}, res)=> {
	if (body.username) {
		session.username = body.username;
		res.jsonp({"success": true, "info": "登陆成功"})
	} else {
		res.jsonp({"success": false, "info": "登陆失败"})
	}
});


module.exports = router;