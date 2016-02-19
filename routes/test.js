//require("babel-polyfill");
require("babel-core/register");
require("./dateformat");

const request = require("request").defaults({jar: true});
const util = require("./aesutils").default;
const qs = require("querystring");

function param() {
	return [
		{name: "timestamp", value: new Date().Format("yyyy-MM-dd hh:mm:ss")},
		{name: "appKey", value: "appKey"},
		{name: "clientType", value: "4"}
	];
}
function sign(arr) {
	arr.sort(function (a, b) {
		return a.name > b.name;
	});
	var s = "d41904c9-58af-4f1d-9407-de6902f71ac1";
	for (var i of arr) {
		s += i.name;
		s += i.value;
	}
	return util.md5(s);
}
