const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an array of the middle elements of an array of 2 elements", () => {
    assert.deepEqual(middle([21,32,34,51]), [32, 34]);
  });
  it("returns an array of the middle elements of an array of one element", () => {
    assert.deepEqual(middle([2,3,4]), [3]);
  });
  it("returns an array of a galaxy far away, the middle element", () => {
    assert.deepEqual(middle(["Luke", "Darth Vader", "Obiwan"]), ["Darth Vader"]);
  });
  it("returns an array of the middle element of an array of odd length", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it("returns an array of the middle elements of an array of even length", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
});

