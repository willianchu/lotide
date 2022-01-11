const args = process.argv.slice(2); // Took what it´s matter

const tail = function(array) {
  if (array.length < 2) {
    return [];
  }
  return array.slice(1);
};

const head = function(array) {
  return array[0];
};

const pigLatin = function(text) {
  const headLetter = head(text);
  const tailWord = tail(text);
  return `${tailWord}${headLetter}ay`;
};

let longAnswer = "";
for (let i = 0; i < args.length; i++) { // iterate over the array
  longAnswer += (pigLatin(args[i])) + " "; // concatenate the pig latin word
}
console.log(longAnswer);
