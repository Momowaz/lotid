const assertArraysEqual = require('./assertArraysEqual');

const without = function (source, itemsToRemove) {
    const filterdArray = [];

    for (let i = 0; i < source.length; i++) {
        let found = false;

        for (let j = 0; j < itemsToRemove.length; j++) {
            if (source[i] === itemsToRemove[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            filterdArray.push(source[i]);
        }
    }

    return filterdArray;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;