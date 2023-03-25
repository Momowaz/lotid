const flatten = function (arr) {
    let flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattenedArray = flattenedArray.concat(flatten(arr[i]));
        } else {
            flattenedArray.push(arr[i]);
        }
    }

    return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [2, 3]
