const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("[1, 2, [3, [4, 5]], [6]] returns [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, [4, 5]], [6]]), [1, 2, 3, 4, 5, 6]);
  });

});


