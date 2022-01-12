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

const flatten = function(array) { // receive the bag of arrays
  let newArray = []; // accumulator for the flattened array
  for (let i = 0; i < array.length; i++) { // loop through the array
    if (Array.isArray(array[i])) { // if the element is an array
      newArray = newArray.concat(flatten(array[i])); //combine two arrays + recursion
    } else {
      newArray.push(array[i]); // if the element is not an array, push it to the new array
    }
  }
  return newArray;
};



assertArraysEqual(flatten([1, 2, [3, [4, 5]], [6]]), [1, 2, 3, 4, 5, 6]);
