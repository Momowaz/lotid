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

    return filterdArray;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))