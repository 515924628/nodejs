"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

var func = function () {
	var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var res, data;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return fetch("/login", {});

					case 2:
						res = _context.sent;
						_context.next = 5;
						return res.json();

					case 5:
						data = _context.sent;

						console.log(data);

					case 7:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function func() {
		return ref.apply(this, arguments);
	};
}();