const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.assert(actual === expected);
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.assert(actual !== expected);
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
};

const findKey = function (obj, callback) {

    const key = Object.keys(obj).find((key) => console.log(callback(obj[key])));
    return console.log('key :', key) || undefined;

        // let items = Object.values(obj);
        // let numOfStar = Object.values(items);

        // console.log(numOfStar);
        // if (items === 2) {
        //     return true;
        // }
}

 findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2)


//assertEqual(result, "noma");
//console.log(result);