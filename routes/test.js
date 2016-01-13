"use strict";

var express = require("express");
//import express from "express"
var router = express.Router();

router.get('/', function (req, res) {
	res.json({ ok: true, info: "666666" });
});
router.get("/:id", function (req, res) {
	res.json({ ok: true, info: "666666", id: req.params.id });
});

module.exports = router;