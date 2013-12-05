var httpProxy = require('http-proxy');

var targets = {
    'nodeServer' : {
        host : 'localhost',
        port : 8081
    }
};

var proxyPort = 80;
console.log('1');
var proxyServer = httpProxy.createServer(function(req, res, proxy) {
    proxy.proxyRequest(req, res, targets.nodeServer);
    console.log('22');
}).listen(proxyPort);
