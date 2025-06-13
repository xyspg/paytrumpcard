// secure-proxy.js
const https = require('https');
const httpProxy = require('http-proxy');
const fs = require('fs');

const proxy = httpProxy.createProxyServer({});
const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

https.createServer(options, (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3000' });
}).listen(443, () => {
  console.log('Secure proxy at https://localhost');
});
