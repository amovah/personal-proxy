let http = require('http'),
    httpProxy = require('http-proxy');

let proxy = httpProxy.createProxyServer({});

let server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://127.0.0.1:8010'});
});

server.listen(80);
