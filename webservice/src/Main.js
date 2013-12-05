var connect = require('connect');
var redirect = require('connect-redirection');

var communicationLayer = require('./communicationLayer.js');
var IdentifyAndCategorize = require('./IdentifyAndCategorize.js');
var logLayer = require('./logLayer.js');
var reflexive = require('./reflexive.js');
var reflective = require('./reflective.js');
var storeData = require('./storeData.js');

var server = connect.createServer();

server.use(connect.bodyParser());
server.use(redirect());
server.use(logLayer);
server.use(communicationLayer);
server.use(IdentifyAndCategorize);
server.use(reflexive);
server.use(reflective);
server.use(storeData);

server.listen(8081, 'localhost');
