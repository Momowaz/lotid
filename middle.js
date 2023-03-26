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

module.exports = middle;
