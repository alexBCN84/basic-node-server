const http = require('http');

const server = http.createServer((request, response) => {
    const user = {
        name: 'Alejandro',
        surname: 'Gines Martinez'
    }
    // response.setHeader('Content-Type', 'text/html')
    // response.end('<h1>Helloooo World!!!</h1>')
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(user));
    console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)
});

server.listen(3000)