const router = require("express").Router();


router.route("/").get((req, res)=> {
	if (req.session.username) {
		res.render("index", {title: "radius的个人网站"});
	} else {
		res.redirect("/login");
	}
});
router.route("/action/:n").get((req, res)=> {
	res.set({"Access-Control-Allow-Origin": "*"});
	res.send(req.params);
});

module.exports = router;
