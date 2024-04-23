'use strict';
const express = require('express');
const fs = require('fs');
const path = require('path');
const validates = require('./validates');

const filePath = path.join(__dirname, 'users.json');

const app = express();

app.use(express.json());

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
}

app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.send({ users });
});

app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        res.send({ user });
    } else {
        res.send({ error: 'User not found' });
    }
});

app.put('/users/:id', (req, res) => {
    const result = validates.scheme.validate(req.body);
    if (result.error) {
        return res.send({ error: result.error.details });
    }

    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const user = users.find(user => user.id === Number(req.params.id));
    if (user) {
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.age = req.body.age;
        user.city = req.body.city;
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        res.send({ user });
    } else {
        res.send({ error: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const result = validates.scheme.validate(req.body);
    if (result.error) {
        return res.send({ error: result.error.details });
    }

    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    let newId = 1;
    if (users.length > 0) {
        newId = validates.maxId(users) + 1;
    }

    const user = {
        id: newId,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        age: req.body.age,
        city: req.body.city,
    };
    users.push(user);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.send({ user });
});

app.delete('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const userIndex = users.findIndex(user => user.id === Number(req.params.id));
    if (userIndex >= 0) {
        users.splice(userIndex, 1);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
        res.send({ status: 'ok' });
    } else {
        res.send({ error: 'User not found' });
    }
});

app.use((req, res) => {
    res.status(404).send("<h1>Страница не найдена</h1>");
});

app.listen(8080, () => console.log("Started"));