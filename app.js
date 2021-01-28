const http = require('http')
const fs = require('fs');
http.createServer(function(req, res) {
    console.log(req)
    if (req.url === "/" && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('index.html', 'utf8', (err, page) => {
            if (err) {
                res.write("error");
                res.end();
            }
            res.write(page);
            res.end();
        })

        //specify the content type in the reisponse will be an image
        // res.writeHead(200, { 'Content-type': '/IMG_20190304_175942_908.jpg' });
        // res.end();


    } else if (req.url === "/IMG_20190304_175942_908.jpg" && req.method === "GET") {
        fs.readFile('IMG_20190304_175942_908.jpg', (err, img) => {
            if (err) {
                res.write("error");
                res.end();
            }
            res.write(img);
            res.end();
        })

    } else if (req.url === "/home" && req.method === "GET") {
        res.write("hello from page home server")
        res.end();
    } else if (req.url === "/user" && req.method === "GET") {
        res.write("hello from page user server")
        res.end();
    } else if (req.url === "/contact" && req.method === "GET") {
        res.write("hello from page contact server")
        res.end();
    } else if (req.url === "/style.css" && req.method === "GET") {
        fs.readFile('style.css', 'utf8', (err, page) => {
            if (err) {
                res.write("error");
                res.end();
            }
            res.write(page);
            res.end();
        })
    } else if (req.url === "/main.js" && req.method === "GET") {
        fs.readFile('main.js', 'utf8', (err, page) => {
            if (err) {
                res.write("error");
                res.end();
            }
            res.write(page);
            res.end();
        })

    } else {
        res.write("bad req!!!")
        res.end();
    }
}).listen(5005);
console.log("Server started")