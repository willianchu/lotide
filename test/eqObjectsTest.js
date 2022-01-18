const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#Code Test - Eq Objects", () => {
  it("Comparing Equal Objects inside Objects in sorted keys order True", () => {
    const ab = { a: "1", b: "2" , plus: { c: "3", d: "4" } };
    const ba = { b: "2", a: "1" , plus: { c: "3", d: "4" } };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("Comparing identical objects - True", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("Comparing objects inside objects with different keys number - False", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("Comparing objects inside objects with simple object - False", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});
