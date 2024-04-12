'use strict';

const res = require('./calcSum.js');
require('colors');

const result = res([12.1, 32.2, 3.1], 0.9);
const resText = `Сумма с учетом скидки - ${result}`;

console.log(result > 50 ? resText.red : resText.green);