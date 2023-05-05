const assertEqual = require('./assertEqual');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  for (let key in actual) {
    if (actual[key] === expected[key]) {
        assertEqual(true, true);
    }
  }
  assertEqual(true, false);
};

const shirtObject = { a: "1", b: "2" };
const anotherShirtObject= { b: "2", a: "1" };
assertObjectsEqual(shirtObject , anotherShirtObject);

