'use strict';

const index = '<h1>Head page</h1><h2><a href="/about">Переход на страницу About</a></h2>';
const about = '<h1>About page</h1><h2><a href="/">Переход на главную страницу</a></h2>';
const port = 3000;
const http = require('http');
let indexCounter = 0;
let aboutCounter = 0;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end(index);
        // indexCounter++;
        console.log('Количество обращений к Главной странице ' + ++indexCounter);
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end(about);
        // aboutCounter++;
        console.log('Количество обращений к странице About ' + ++aboutCounter);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end('<h1>No Page!!!</h1>');
    }
});

server.listen(port, () => {
    console.log('Server on port ' + port);
});