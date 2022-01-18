// ACTUAL FUNCTION

/* Implement middle which will take in an array and return the middle-most element(s) of the given array. */

const middle = function(array) {
  let numberOfItems = array.length;
  let middleItem = Math.floor(numberOfItems / 2);
  console.log({middleItem});
  if (numberOfItems % 2 === 0) {
    return [array[middleItem - 1], array[middleItem]];
  } else {
    return [array[middleItem]];
  }
};

module.exports = middle;

