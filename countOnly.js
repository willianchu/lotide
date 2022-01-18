// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  const outputCount = {};
  for (let name of allItems) {
    if (itemsToCount[name]) {
      if (outputCount[name]) {
        outputCount[name]  ++; // initialize key
      } else {
        outputCount[name] = 1; // increment existing key
      }
    }
  }
  console.log(outputCount);
  return outputCount;
};

module.exports = countOnly;


