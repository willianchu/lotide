// index.js =<^;^>=


const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const flatten = require('./flatten');
const map = require('./map');
const reverse = require('./reverse');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  flatten: flatten,
  map: map,
  reverse: reverse,
  without: without
};



