'use strict';

const calcResults = function (a, b, c) {

    const d = b * b - 4 * a * c;

    if (d < 0) {
        return null;
    } else {
        return [(- b + Math.sqrt(d)) / 2 / a, (- b - Math.sqrt(d)) / 2 / a];
    }
}

module.exports = { calcResults };