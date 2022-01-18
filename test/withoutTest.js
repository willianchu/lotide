const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("Removing number 1", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("Removing number different values types", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("Removes Lighthouse element from array and make sure the original was not altered", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(without(words, "Lighthouse"), ["Hello", "Labs"]);
    assert.deepEqual(words, ["Hello", "Lighthouse", "Labs"]);
  });




}); // final curly brace