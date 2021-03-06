// auxiliary code already in Lotide library
const eqArrays = require('./eqArrays');

// extra auxiliary code
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

// main code
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keyObject1 = Object.keys(object1); // get keys of object1 (array)
  const keyObject2 = Object.keys(object2); // get keys of object2 (array)
  
  if (keyObject1.length !== keyObject2.length) {
    //console.log("Return false 04");
    return false; // Quit if the sizes of objects don't match
  }
  for (let key of keyObject1) { // navigate all through the object1 keys
    if (keyObject2.indexOf(key) >= 0) { // verifies if the key of object1 exist in object2
      switch (typeof object1[key]) { // verifies the type of the value of the key
      case 'object': // if it's an object, it will compare the objects
        //console.log("Return false 03");
        return eqObjects(object1[key], object2[key]); // recursive call
      default:
        if (!bothAreEqual(object1[key],object2[key])) {
          //console.log("Return false 02");
          return false; // if values are different variables or arrays
        }
      }
      
    } else {
      //console.log("Return false 01");
      return false; // Quit if Object1 has a different key
    }
  }
  //console.log("Return true 01");
  return true; // if survive all conditions the objects are equals
};


module.exports = eqObjects;