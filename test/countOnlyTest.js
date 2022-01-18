
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("Count Only", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  it("should return the count of the given item", () => {
    assert.deepEqual(result1, { "Jason": 1, "Fang": 2 });
  });
  it("should return the count of the given item [\"Jason\"]", () => {
    assert.deepEqual(result1["Jason"], 1);
  });
  it("should return the count of the given item [\"Karima\"]", () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
  it("should return the count of the given item [\"Fang\"]", () => {
    assert.deepEqual(result1["Fang"], 2);
  });
  it("should return the count of the given item [\"Agouhanna\"]", () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});