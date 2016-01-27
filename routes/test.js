//require("babel-polyfill");
require("babel-core/register");

const request = require("request").defaults({jar: true});
const util = require("./aesutils").default;
const qs = require("querystring");
//author: meizz
Date.prototype.Format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};
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

//var p = param();
//p.push({name: "phone", value: "1877567777"});
//p.push({name: "sign", value: sign(p)});
//var params = {};
//for (var k of p) {
//	params[k.name] = k.value;
//}

//var baseurl = "http://10.100.71.8:8080/jl-web/a";


//request(baseurl + "/sys/user/verify?" + qs.stringify(params), function (err, req, body) {
//	console.log(JSON.parse(body));
//	p = param();
//	p.push({name: "password", value: "123456"});
//	p.push({name: "code", value: "123456"});
//	p.push({name: "sign", value: sign(p)});
//	var params = {};
//	for (var k of p) {
//		params[k.name] = k.value;
//	}
//	request(baseurl + "/sys/user/register?" + qs.stringify(params), function (err, req, body) {
//		var json = JSON.parse(body);
//		console.log(json);
//		if (json.data) {
//			console.log(util.dec(json.data))
//		}
//	});
//});