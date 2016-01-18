require("babel-polyfill");

exports.ajax = async function (url, options = {}) {
	options.credentials = "include";
	let res = await fetch(url, options);
	console.log(res.headers.get("Content-Type"));
	if (/json/.test(res.headers.get("Content-Type"))) {
		return res.json()
	}
	return res.text();
};
exports.get = async function (url, options = {}) {
	options.method = "GET";
	return exports.ajax(url, options);
};
exports.post = async function (url, data, options = {}) {
	options.method = "POST";
	if (typeof data === "object") {
		options.headers = options.headers || new Headers();
		options.headers.set("Content-Type", "application/json");
		options.body = JSON.stringify(data);
	} else {
		options.body = data;
	}
	return exports.ajax(url, options);
};

document.getElementById("sub").onclick = async function () {
	let data = await exports.post("/login", {username: username.value, password: password.value});
	console.log(data);
};