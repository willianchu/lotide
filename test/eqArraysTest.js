const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

describe ("#eqArrays", () => {
  it("returns true when two arrays are equal", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns false when two arrays are not equal", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("returns false when two arrays are not equal", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });
});
