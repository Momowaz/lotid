const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
console.log("array 1", eqArrays([1, 2, 3], [1, 2, 3]))// => true
console.log("array 2 ", eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log("array 3", eqArrays([1], [3,2]))