const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.assert(actual === expected);
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.assert(actual !== expected);
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
};


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

console.log("array 1", eqArrays([1, 2, 3], [1, 2, 3]))// => true
console.log("array 2 ", eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log("array 3", eqArrays([1], [3,2]))