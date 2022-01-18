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

module.exports = flatten;
