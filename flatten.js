const _ = require('lodash');
const assertEqual = require('./assertEqual');

const flatten = function (arr) {
    let flattenedArray = [];
    flattenedArray = _.flattenDeep(arr);
    return flattenedArray;
}

const result = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertEqual(result, [1, 2, 3, 4, 5, 6]);

