// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

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

// TEST CODE
assertArraysEqual(middle([21,32,34,51]), [32, 34]);
assertArraysEqual(middle([2,3,4]), [3]);
assertArraysEqual(middle(["Luke", "Darth Vader", "Obiwan"]), ["Darth Vader"]);

