let _ = require('lodash');
const assertEqual = require('./assertEqual');

const findKey = function (obj, callback) {

    const key = _.findKey(obj, callback);
    return key;
}

 const key = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2)


console.log(key)
assertEqual(key, "noma")