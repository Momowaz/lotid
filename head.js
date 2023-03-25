const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.assert(actual === expected);
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.assert(actual !== expected);
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Mohib", "Mohib");
assertEqual(2, '2');
