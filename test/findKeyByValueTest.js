const assert = require('chai').assert;
const findKeyByValue = require('../FindKeyByValue');

describe("#findKeyByValue - Should PASS", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it("returns true when two arrays are equal", () => {
    assert.deepEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}, "The Wire"), "drama");
  });
  it("returns true when two arrays are equal", () => {
    assert.deepEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}, "That '70s Show"), undefined);
  });
});