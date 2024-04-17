'use strict'

const express = require('express');
const path = require('path');
const fs = require('fs');

const port = 3000;
const app = express();

let counters = {
    index: 0,
    about: 0
};

const pathToFile = path.join(__dirname, 'counters.json ');

// try {
//     counters = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
// } catch (err) {
//     if (err.code === 'ENOENT') {
//         console.log('File not found! Created new file');
//     } else {
//         throw err;
//     }
//     fs.writeFileSync(pathToFile, JSON.stringify(counters, null, 2));
// }

if (fs.existsSync(pathToFile)) {
    counters = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
} else {
    fs.writeFileSync(pathToFile, JSON.stringify(counters, null, 2));
    console.log('File not found! Created new file');
}

app.get('/', (req, res) => {
    counters.index++;
    fs.writeFileSync(pathToFile, JSON.stringify(counters, null, 2));
    res.send(`<h1>Корневая страница</h1><p>Просмотров: ${counters.index}</p><a href='/about'>Ссылка на страницу /about</a>`);
});

app.get('/about', (req, res) => {
    counters.about++;
    res.send(`<h1>Страница about</h1><p>Просмотров: ${counters.about}</p><a href='/'>Ссылка на страницу /</a>`);
    fs.writeFileSync(pathToFile, JSON.stringify(counters, null, 2));
});

app.use((req, res) => {
    res.status(404).send("<h1>Страница не найдена</h1>")
});

app.listen(port, () => console.log(`Server started at port ${port}`));