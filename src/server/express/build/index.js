"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));

var votes = {};

// GET /votes
app.get("/votes", function (req, res) {
	res.json(votes);
});

// POST /vote/<id>
app.post("/vote/:id", function (req, res) {

	var id = req.params.id;
	if (votes[id] === undefined) {
		votes[id] = 1;
	} else {
		votes[id] += 1;
	}

	res.json(votes[id]);
});

app.listen(8000, function () {
	return console.log("listening on port 6000");
});
