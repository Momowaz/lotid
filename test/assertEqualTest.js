const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Mohib", "Mohib");
assertEqual(2, '2');


//test head.js file
console.log('------------------- HEAD --------------------')
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");