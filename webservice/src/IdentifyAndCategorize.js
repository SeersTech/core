var identifyDB = [ 'football', 'cricket', 'movies', 'augmented reality',
		'virtual', 'avatar', 'food', 'coding', 'software', 'technology',
		'smartphone', 'google', 'microsoft', 'spiritualiy', 'VIT Univerisy',
		'Machilipatnam' ];

var findWordInIdentifyDB = function(msg, cb) {
	var words = msg.split(' ');
	for ( var i = 0; i < words.length; i++) {
		for ( var j = 0; j < identifyDB.length; j++) {
			if (words[i] === identifyDB[j]) {
				cb(null, 'imp');
				return;
			}
		}
		if (i === words.length - 1) {
			cb(null, 'not');
			return;
		}
	}
};
var findImportantOrNot = function(attrs, cb) {

	var status = 'not';
	if (attrs.heartRate !== 'Normal' && attrs.heartRate !== undefined) {
		status = 'imp';
		cb(null, status);
	} else if (attrs.actuators !== 'Normal' && attrs.actuators !== undefined) {
		status = 'imp';
		cb(null, status);
	} else if (1) {
		findWordInIdentifyDB(attrs.msg, function(err, result) {
			status = result;
			cb(null, status);
		});
	} else {
		status = 'not';
		cb(null, status);
	}
	;
};

var IdentifyAndCategorize = function(req, res, next) {
	findImportantOrNot(req.body.attrs, function(err, result) {
		req.body.attrs.important = result;
		next();
	});
};
module.exports = IdentifyAndCategorize;
