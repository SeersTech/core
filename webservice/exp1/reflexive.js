
var processRequest = function(attrs, cb) {
	attrs.response = 'Take Care, play safe';
	cb(null, 'something');
};

var findCanHandle = function(attrs, cb) {
	var status = 'not';
	if (attrs.heartRate === 'Extreme') {
		status = 'imp';
		cb(null, status);
	} else if (attrs.actuators === 'Extreme') {
		status = 'imp';
		cb(null, status);
	} else if (attrs.voiceFrequency === 'Extreme') {
		status = 'imp';
		cb(null, status);
	} else {
		status = 'not';
		cb(null, status);
	}
	;
};

var reflexive = function(req, res, next) {
	findCanHandle(req.body.attrs, function(err, result) {
		if (result === 'imp') {
			processRequest(req.body.attrs, function(err, res1) {
				req.body.attrs.reflexive = 'done';
				next();
			});
		} else {
			req.body.attrs.reflexive = 'not';
			next();
		}
	});
};
module.exports = reflexive;
