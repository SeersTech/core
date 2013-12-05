var communicationLayer = function(req, res, next) {
	console.log('Communication Layer');
	var attrs = {};
	attrs.gps = req.body.gps;
	attrs.voice = req.body.voice;
	attrs.voiceFrequency = req.body.voiceFrequency;
	attrs.image = req.body.image;
	attrs.heartRate = req.body.heartRate;
	attrs.actuators = req.body.actuators;
	attrs.msg = req.body.msg;
	attrs.carMsg = req.body.carMsg;
	attrs.question = req.body.question;
	
	
	attrs.browser = req.body.browser;
	attrs.browserObj = req.body.browserObj;
	
	req.body.attrs = attrs;
	next();
};
module.exports = communicationLayer;
