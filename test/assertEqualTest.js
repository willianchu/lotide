const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true when two values are equal", () => {
    assert.deepEqual(assertEqual("Bootcamp", "Bootcamp"), true);
  });
  it("returns false when two values are not equal", () => {
    assert.deepEqual(assertEqual("1", "5"), false);
  });
  it("returns false when two values are opposites", () => {
    assert.deepEqual(assertEqual("Sith", "Jedi"), false);
  });
});


