const middle = function (arr) {
    let emptyArray = [];

    if (arr.length < 3) {
        return emptyArray;
    } else {

        const middle = Math.floor(arr.length / 2);
        emptyArray.push(arr[middle]);
        return emptyArray;
    }

}

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
