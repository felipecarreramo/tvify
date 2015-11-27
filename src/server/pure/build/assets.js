'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var importAsset = function importAsset(name, callback) {

	_fs2.default.readFile('./public/' + name, function (err, data) {
		if (err) {
			return callback(err);
		}
		callback(err, data.toString());
	});
};

exports.default = importAsset;
