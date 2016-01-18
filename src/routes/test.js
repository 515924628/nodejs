require("babel-polyfill");
var fs = require("fs");

!async function () {
	var data = await new Promise((resolve, reject)=> {
		fs.readFile("login.js", "utf-8", (err, data)=> {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	});
	console.log(data);
}();
