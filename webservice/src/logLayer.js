var mongojs = require('mongojs');
var databaseURL = "SeersExp";

var insertSmsLogs = function(attrs, cb) {
	var db;
	db = mongojs(databaseURL, [ 'sms' ]);
	var obj = JSON.parse(attrs.obj);
	delete attrs.obj;
	obj.push(attrs);
	for ( var prop in obj) {
		obj[prop].DATE = new Date(obj[prop].DATE);
	}
	function callbackInsert(err, results) {
		if (err !== null || results === null) {
			cb(new Error("Unable to insert"));
		} else {
			cb(null, 'done');
		}
	}
	db.sms.insert(obj, callbackInsert);
};

var insertBrowserLogs = function(attrs, cb) {
	var db;
	db = mongojs(databaseURL, [ 'browser' ]);
	console.log('Inserting Browser Data');
	function callbackInsert(err, results) {
		if (err !== null || results === null) {
			cb(new Error("Unable to insert"));
		} else {
			cb(null, 'done');
		}
	}
	db.browser.insert(attrs, callbackInsert);
};

var logLayer = function(req, res, next) {
	console.log(req.body);
	if (req.body.browser === 'yes') {
		insertBrowserLogs(req.body, function(err, res1) {
			console.log('Inserted BrowserLog with err ' + err);
		res.end('done');
	});
	}
	else if (req.body !== null) {
		insertSmsLogs(req.body, function(err, res1) {
			console.log('Inserted SmsLogs with err ' + err);
		res.end('done');	
	});
	} else {
        res.end('no body done');
		next();
	}
};
module.exports = logLayer;
