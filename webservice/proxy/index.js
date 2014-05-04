var http = require('http');
var httpProxy = require('http-proxy');

httpProxy.createServer({
    target : {
        host : 'localhost',
        port : 8081
    }
}).listen(80);

