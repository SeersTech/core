var mongojs = require('mongojs');
var databaseURL = "eMind";

var processRequest = function(attrs, cb) {
	attrs.response = 'Take Care, play safe';
	cb(null, 'something');
};

var findGoodRestaurants = function(attrs, cb) {
	var db;
	db = mongojs(databaseURL, [ 'knowledge', 'data' ]);

	function cbGetAccountBalance(err, results) {
		if (err !== null || results === null) {
			cb(new Error("Unable to get the balance"));
		} else {
			attrs.response = results.gps;
			cb(null, 'done');
		}
	}
	db.data.findOne({
		msg : attrs.msg,
		heartRate : "high"
	}, cbGetAccountBalance);
};

var reflective = function(req, res, next) {
	if (req.body.attrs.question === "yes") {
		findGoodRestaurants(req.body.attrs, function(err, res1) {
			req.body.attrs.reflective = res1;
			next();
		});
	} else {
		next();
	}
};
module.exports = reflective;
