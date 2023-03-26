const eqArrays = function (a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
};

const assertArraysEqual = function (actual, expected) {
    console.log("actual: ", actual, "expected: ", expected);
    if (eqArrays(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
};

const letterPositions = function (sentence) {
    let results = {};
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter !== ' ') {
            if (!results[letter]) {
                results[letter] = [];
            }
            results[letter].push(i);
        }
    }
    return results;
};

letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);
