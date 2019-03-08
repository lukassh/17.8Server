var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function(request, response) {

response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html',function(err, data) {
        	if (err) throw err;
        	response.write(data);
        	response.end();
        })
  
    } else {
            response.statusCode = 404;
            response.setHeader('Content-Type', 'image/jpeg');
            fs.readFile('./404.jpg', function(err, img) {
            	response.write(img);
            	response.end();
            })
    }
});

server.listen(8080);