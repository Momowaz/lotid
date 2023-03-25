const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.assert(actual === expected);
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.assert(actual !== expected);
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
};

const countLetters = function (sentence) {
    const result = {};
    for (let char of sentence) {
        if (char !== ' ') {
            if (assertEqual(1, 2)) {
                console.log('me ', result[char] + 1);
            }
            // else {
            //     console.log('him ', result[char]);
            // // }
            
        }
    }
    return result;
}

// const result1 = countLetters("lighthouse in the house");

// assertEqual(result1, )

countLetters("lighthouse in the house");