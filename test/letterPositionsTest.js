const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  const sentence = "lighthouse in the house";
  it('returns an array in .e ', () => {
    console.log(letterPositions(sentence).e);
    assert.deepEqual(letterPositions(sentence).e, [9, 16, 22]);
  });
  it('returns an array in .l ', () => {
    assert.deepEqual(letterPositions(sentence).l, [0]);
  });
  it('returns an array in .i ', () => {
    assert.deepEqual(letterPositions(sentence).i, [1, 11]);
  });
  it('returns an array in .g ', () => {
    assert.deepEqual(letterPositions(sentence).g, [2]);
  });
});