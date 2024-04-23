'use strict';

const joi = require('joi');

const scheme = joi.object({
    firstName: joi.string().min(1).required(),
    secondName: joi.string().min(1).required(),
    age: joi.number().min(0).max(300).required(),
    city: joi.string().min(3)
});

const maxId = function (data) {
    const ids = data.map(object => {
        return object.id;
    });
    return Math.max(...ids);
}

module.exports = { scheme, maxId };