const assert = require('chai').assert;
const reverse = require('../reverse');

describe("#Reverse", () => {
  it("Reverses a string", () => {
    assert.deepEqual(reverse("Willian"), "nailliW"); 
  });

});
