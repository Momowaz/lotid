const assertEqual = require('./assertEqual');

const flatten = function (arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
        //If it is an array, it calls itself recursively to flatten subarray.
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

const result = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertEqual(result, [1, 2, 3, 4, 5, 6]);

