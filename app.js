const http = require('http')
http.createServer(function(req, res) {
    console.log(req)
}).listen(5005);
console.log("Server started")