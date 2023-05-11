const http = require('http');

//parameter req represents the incoming request, res represents the response which is being sent back
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    res.end(`<h1>Oops!</h1>`)
})

server.listen(2000);