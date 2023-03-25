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
        console.assert(actual === expected);
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.assert(actual !== expected);
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
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
console.log('results: ', filterdArray);
    return filterdArray;
}

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// const results = without([1, 2, 3], [1]);
// console.log('results: ', results);
assertArraysEqual( without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"]))