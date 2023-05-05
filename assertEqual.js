const assertEqual = function (actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.assert(JSON.stringify(actual) === JSON.stringify(expected));
        console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
    } else {
        console.assert(JSON.stringify(actual) !== JSON.stringify(expected));
        console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
    }
};

module.exports = assertEqual;
