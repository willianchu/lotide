const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // if the sizes don't match
    //console.log("False 01");
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { // loop through the both arrays and compare each element
    switch (Array.isArray(arr1[i])) {
    case true:
      if (!eqArrays(arr1[i], arr2[i])) { // call recursively if the element is an array
        return false; // if one branch returns false, return false
      }
      break;
    default:
      if (arr1[i] !== arr2[i]) {
        //console.log("False 02", arr1[i], arr2[i], typeof arr1[i]);
        return false;
      }
    }
  }
  //console.log("True 03");
  return true;
};

module.exports = eqArrays;




