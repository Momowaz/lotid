const eqArrays = function (a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false
        }
    }
    return true
}

const assertArraysEqual = function (actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
};

const middle = function (arr) {
    let emptyArray = [];

    if (arr.length < 3) {
        return emptyArray;
    } else if (arr.length % 2 === 0) {
        const middle1 = arr[Math.floor((arr.length - 1) / 2)];
        const middle2 = arr[Math.floor(arr.length / 2)];
        emptyArray.push(middle1, middle2);
        return emptyArray;
    }
    else {
        const middle = Math.floor(arr.length / 2);
        emptyArray.push(arr[middle]);
        return emptyArray;
    }

}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

