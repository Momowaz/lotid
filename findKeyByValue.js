const assertEqual = require('./assertEqual');

const findKeyByValue = function (object, value) {
    return Object.keys(object).find(key => object[key] === value);
};

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

module.exports = findKeyByValue;