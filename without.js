const eqArrays = require('./eqArrays');
   
const without = function(source, itemsToRemove) {
  if (eqArrays(source, itemsToRemove)) {
    return [];
  } // if the source and itemsToRemove are the same, return an empty array
  let newArray = []; // accumulator
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) { // if the item in source is not in itemsToRemove
      newArray.push(source[i]);
    }
  }
  return newArray;
};
module.exports = without;
