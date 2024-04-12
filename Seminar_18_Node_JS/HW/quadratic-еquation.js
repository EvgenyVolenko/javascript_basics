'use strict';

const calcResults = function (a, b, c) {

    const d = b * b - 4 * a * c;

    if (d < 0) {
        return null;
    } else {
        const results = [(- b + Math.sqrt(d)) / 2 / a, (- b - Math.sqrt(d)) / 2 / a];
        return results;
    }
}

module.exports = { calcResults };