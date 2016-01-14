const router = require("express").Router();

router.route("/").get((req, res)=> {
	res.render("login");
}).post(({body, session, cookies}, res)=> {
	console.log("login " + cookies);
	if (body.username) {
		session.username = body.username;
		res.jsonp({state:"success"})
	} else {
		res.send("登陆失败")
	}
});


module.exports = router;