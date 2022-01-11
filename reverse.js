const args = process.argv.slice(2); // Took what it´s matter

const reverse = function(text) { // Function to reverse the text
  return text.split("").reverse().join("");
};

for (let i = 0; i < args.length; i++) { // iterate over the array
  console.log(reverse(args[i]));
}