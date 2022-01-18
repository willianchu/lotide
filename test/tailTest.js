const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns an array of the middle element of an array of odd length", () => {
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  });
  it("returns an array of the middle elements of an array of even length", () => {
    assert.deepEqual(tail([1,2,3,4,5,6]), [2,3,4,5,6]);
  });
}); // final curly brace

describe("### Test Cases", () => {
  it("Test Case 1: Check the original array returns an array of the middle element of an array of odd length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3); // original array should still have 3 elements!
  });
  it("Test Case 2: Check the returned array elements", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    tail(result);
    assert.deepEqual(result.length, 2); // ensure we get back two elements
    assert.deepEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.deepEqual(result[1], "Labs"); // ensure second element is "Labs"
  });
  it("Test Case 3: An array with only one element should yield an empty array for its tail", () => {
    const oneElement = ["Yo Yo"];
    tail(oneElement);
    assert.deepEqual(oneElement.length, 1); // original array should still have 1 elements!
  });
  it("Test Case 4: An empty array should yield an empty array for its tail", () => {
    const emptyArray = [];
    tail(emptyArray);
    assert.deepEqual(emptyArray.length, 0); // original array should still have 0 elements!
  });


}); // final curly brace


