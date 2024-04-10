'use strict';

const index = '<h1>Head page</h1><h2><a href="/about">Переход на страницу About</a></h2>';
const about = '<h1>About page</h1><h2><a href="/">Переход на главную страницу</a></h2>';
const port = 3000;
const http = require('http');
let indexCounter = 0;
let aboutCounter = 0;

const counterWeb = function (page, count) {
    if (page === '/') {
        return index + `<h3>Страница "${page}" была вызвана ${count} раз!!!</h3>`;
    } else if (page === 'about') {
        return about + `<h3>Страница "${page}" была вызвана ${count} раз!!!</h3>`;
    }
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end(counterWeb('/', ++indexCounter));
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF8'
        });
        res.end(counterWeb('about', ++aboutCounter));
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