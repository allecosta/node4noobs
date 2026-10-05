let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //console.log("Server rodando...")
  res.end('Hello, NodeJs !!!');
}).listen(8080);
