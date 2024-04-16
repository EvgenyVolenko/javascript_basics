'use strict'

const express = require('express');

const port = 8080;
const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => {
//     res.send("<h1>Welcome!</h1><a href='/about'>About</a>");
// });

// app.get('/about', (req, res) => {
//     res.send("<h1>About!</h1><a href='/'>Home</a>");
// });

app.listen(port, () => console.log("Started"));