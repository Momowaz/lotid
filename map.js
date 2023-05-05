const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const expectedArray = [ 'g', 'c', 't', 'm', 't' ];

const map = function(array, callback) {

    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
};


const result1 = map(words, word => word[0]);

assertArraysEqual(result1, expectedArray);

//console.log(result1);