const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual - Should PASS", () => {
  it("returns true when two arrays are equal", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true when two arrays are equal", () => {
    assert.deepEqual(assertArraysEqual([5, 6, 7], [5, 6, 7]), true);
  });
});
describe("#assertArraysEqual - Should NOT pass", () => {
  it("returns true when two arrays are equal (different order)", () => {
    assert.notEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), true, "should return false");
  });
  it("returns false when two arrays are not equal (type)", () => {
    assert.notEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3], true, "it returns false when two arrays are not equal"));
  });
});
