const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};


const without = function (source, itemsToRemove) {
    let filterdArray = [];

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

assertArraysEqual( without([1, 2, 3], [1]), [2, 3]) // => [2, 3]

module.exports = assertArraysEqual;