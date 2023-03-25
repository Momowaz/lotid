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
    // Implement me!
    const inspect = require('util').inspect;

    console.log(`Example label: ${inspect(actual)}`);
  };

  const shirtObject = { a: "1", b: "2" };
const anotherShirtObject= { b: "2", a: "1" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true



assertEquals(assertObjectsEqual(shirtObject , anotherShirtObject), true);
