'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _assets = require('./assets');

var _assets2 = _interopRequireDefault(_assets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_assets2.default);

var server = _http2.default.createServer(function (req, res) {
	switch (req.url) {
		case '/':
			(0, _assets2.default)("index.html", function (err, content) {
				res.end(content);
			});
			break;
		case '/app.css':
			(0, _assets2.default)("app.css", function (err, content) {
				res.end(content);
			});
			break;
		case '/app.js':
			(0, _assets2.default)("app.js", function (err, content) {
				res.end(content);
			});
			break;
		default:
			res.statusCode = 404;
			res.end('Not Found');
			break;
	}
});

server.listen(4000, function () {
	return console.log("server started at port 4000");
});
