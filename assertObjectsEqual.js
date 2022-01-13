// auxiliary code already in Lotide library
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

const eqVariables = (variable1, variable2) => { //compares 2 variables if they´re equal
  if (variable1 !== variable2) {
    return false;
  }
  return true;
};

const bothAreEqual = (value1, value2) => { // Verifies if their equal, could be an array or variable
  if (Array.isArray(value1) && Array.isArray(value2)) { // verifies if both are arrays
    return eqArrays(value1, value2) ? true : false; // compare if arrays are equal
  } else { // otherwise the code will compare as variables
    return eqVariables(value1,value2) ? true : false;
  }
};

// compare objects
const eqObjects = function(object1, object2) {
  const keyObject1 = Object.keys(object1); // get keys of object1 (array)
  const keyObject2 = Object.keys(object2); // get keys of object2 (array)
  
  if (keyObject1.length !== keyObject2.length) {
    return false; // Quit if the sizes of objects don't match
  }
  for (let key of keyObject1) { // navigate all through the object1 keys
    if (keyObject2.indexOf(key) >= 0) { // verifies if the key of object1 exist in object2
      
      if (!bothAreEqual(object1[key],object2[key])) {
        return false; // if values are different variables or arrays
      }
      
    } else {
      return false; // Quit if Object1 has a different key
    }
  }
  return true; // if survive all conditions the objects are equals
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Tests

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // Pass
assertObjectsEqual({ a: [4, 5], b: 2 }, { b: 2, a: [4, 5] }); // Pass
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '5' }); // NOT Pass
