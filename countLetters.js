const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = (string) =>{
  const justLetters = string.split(" ").join(""); // remove spaces
  const countObject = {}; // it will keep track of sums
  for (let letter of justLetters) {
    if (countObject[letter]) {
      countObject[letter] ++;
    } else {
      countObject[letter] = 1;
    }
  }
  return countObject;
};


const basic = "aeiouaeiouBC";
const answer = countLetters(basic);
assertEqual(answer["a"],2);
assertEqual(answer["B"],1);
