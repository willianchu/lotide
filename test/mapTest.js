const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it(" word => word[0] return  ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it(" word => word.length return [6, 7, 2, 5, 3]", () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
  });
  it("  word => word + 'ay' return ['grounday', 'controlay', 'toay', 'majoray', 'tomay']", () => {
    assert.deepEqual(map(words, word => word + "ay"), ['grounday', 'controlay', 'toay', 'majoray', 'tomay']);
  });

  it("[1, 2, 3] returns [1, 4, 9]", () => {
    assert.deepEqual(map([1, 2, 3], num => num * num), [1, 4, 9]);
  });

});