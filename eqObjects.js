const assertEqual = require('./assertEqual');

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
// This test should pass
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// This test should fail
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);