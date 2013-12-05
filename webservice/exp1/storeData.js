var mongojs = require('mongojs');
var databaseURL = "eMind";

var db;
db = mongojs(databaseURL, [ 'knowledge', 'data' ]);

var addToData = function(attrs, cb) {
	db.data.insert(attrs, cb);
};
var addToBrowserData = function(attrs, cb) {
	db.data.insert(attrs, cb);
};

var storeData = function(req, res, next) {
	console.log('storeData');
	if(req.body.attrs.browser === 'yes') {
	
	}
	addToData(req.body.attrs, function(err, result) {
		if (req.body.attrs.response === undefined) {
			req.body.attrs.response = 'nothing';
		}
		res.end(req.body.attrs.response);
	});
};

module.exports = storeData;
