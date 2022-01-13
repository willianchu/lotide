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

/* function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.*/

const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    if (sentence[index] !== " ") {
      if (results[sentence[index]]) {
        results[sentence[index]].push(Number(index));
      } else {
        results[sentence[index]] = [Number(index)];
      }
    }
  }
  return results;
};

const sentence = "lighthouse in the house";
assertArraysEqual(letterPositions(sentence).e, [9, 16, 22]);
assertArraysEqual(letterPositions(sentence).l, [0]);
assertArraysEqual(letterPositions(sentence).i, [1, 11]);
assertArraysEqual(letterPositions(sentence).g, [2]);