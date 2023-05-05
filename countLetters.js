const assertEqual = require('./assertEqual');

const countLetters = function (sentence) {
    const result = {};
    for (let char of sentence) {
        if (char !== " ") {
            if (result[char]) {
                result[char] += 1;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 2);
assertEqual(result1["i"], 2);

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;
