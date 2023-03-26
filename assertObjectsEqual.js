const assertEquals = function (actual, expected) {
  if (actual === expected) {
    console.assert(actual === expected);
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.assert(actual !== expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return true;
  } else {
    return false;
  }
};

const shirtObject = { a: "1", b: "2" };
const anotherShirtObject= { b: "2", a: "1" };
const result = assertObjectsEqual(shirtObject , anotherShirtObject);
assertEquals(result, true);
