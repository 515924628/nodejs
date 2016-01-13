var express = require("express");
//import express from "express"
var router = express.Router();

router.get('/', (req, res)=> {
	res.json({ok: true, info: "666666"})
});
router.get("/:id", (req, res)=> {
	res.json({ok: true, info: "666666", id: req.params.id})
});

module.exports = router;