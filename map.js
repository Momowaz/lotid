
const words = ["ground", "control", "to", "major", "tom"];
const expectedArray = [ 'g', 'c', 't', 'm', 't' ];

const eqArrays = function (a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++){
        if(a[i] !== b[i]) {
            return false
        }
    }
    return true
}

const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual,expected)) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
};
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