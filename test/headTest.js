const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 5 - the first element of an array", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns Hello - the first element of an array", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns the only one element", () => {
    assert.strictEqual(head(["only one"]), "only one");
  });
  it("returns undefined if the array is empty", () => {
    assert.strictEqual(head([]), undefined);
  });
});
