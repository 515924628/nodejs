"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

require("babel-polyfill");
var fs = require("fs");

!_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	var data;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return new Promise(function (resolve, reject) {
						fs.readFile("login.js", "utf-8", function (err, data) {
							if (err) {
								reject(err);
							} else {
								resolve(data);
							}
						});
					});

				case 2:
					data = _context.sent;

					console.log(data);

				case 4:
				case "end":
					return _context.stop();
			}
		}
	}, _callee, this);
}))();