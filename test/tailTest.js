const tail = require('../tail');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assert(words.length, 3);

describe("#tail", () => {
    it("returns [6, 7] from [5, 6, 7]", () => {
        assert.deepEqual(tail([5, 6, 7]), [6, 7]);
    });
    it("returns 'Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
    });
});