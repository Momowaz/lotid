const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key] instanceof Array && object2[key] instanceof Array) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
// This test should pass
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// This test should fail
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

const ab = { a: "1", b: "2" }
const abc = { a: "1", b: "2", c: "3" }
assertEqual(eqObjects(ab , abc), false);

const cd = { c: "1", d: ["2", 3] }
const dc = { c: "1", d: ["2", 3, 4] }

assertEqual(eqObjects(cd , dc), true);

module.exports = eqObjects;