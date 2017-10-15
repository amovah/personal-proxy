let http = require('http'),
    httpProxy = require('http-proxy');

let proxy = httpProxy.createProxyServer({ ws: true });

let server = http.createServer(function(req, res) {
  switch(req.headers.host.split('.').reverse().slice(2).reverse().join('')) {
    case 'foo':
      break;
    default:
      proxy.web(req, res, { target: 'http://127.0.0.1:2080'});
      break;
  }
});

server.listen(80);
