const assertEquals = function (actual, expected) {
    if (actual === expected) {
      console.assert(actual === expected);
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.assert(actual !== expected);
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
    }
  };

  const eqObjects = function (object1, object2) {
    
    for (let key in object1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
        return true;
    }

}

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

assertEquals(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertEquals(eqObjects(shirtObject , longSleeveShirtObject), false);