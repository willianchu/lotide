const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length < 2) {
    return [];
  }
  return array.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 2: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(tail(result));
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 3: An array with only one element should yield an empty array for its tail
const oneElement = ["Yo Yo"];
console.log(tail(oneElement));
assertEqual(oneElement.length, 1); // original array should still have 1 elements!

// Test Case 4: An empty array should yield an empty array for its tail
const noElement = [];
console.log(tail(noElement));
assertEqual(noElement.length, 0); // original array should still have 0 elements!