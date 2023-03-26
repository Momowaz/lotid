let _ = require('lodash');

const flatten = function (arr) {
    let flattenedArray = [];
        flattenedArray = _.flattenDeep(arr);
    return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [2, 3]
