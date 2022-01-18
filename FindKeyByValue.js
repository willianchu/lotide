// Main Code
const findKeyByValue = (targetObject, valueSearched) => {
  for (const genre in targetObject) {
    if (targetObject[genre] === valueSearched) {
      return genre;
    }
  }
};


module.exports = findKeyByValue;