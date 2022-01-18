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
module.exports = letterPositions;