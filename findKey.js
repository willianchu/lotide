const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. */

const findKey = (obj, callback) => {
  const parameters = Object.keys(obj);
  for (let key of parameters) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Suika":  { stars: 4, closes: 11, price: "$$$"},
  "Miku":   { stars: 4, closes: 10, price: "$$$$"},
  "Shiro":  { stars: 4, closes: 9, price: "$$"},
  "Kadoya": { stars: 4, closes: 8, price: "$$"},
  "Minami": { stars: 4, closes: 10, price: "$$"},
  "JapaDog Burrad": { stars: 5, closes: 6, price: "$"}
}, x => ((x.closes > 9) && (x.price === "$$"))), "Minami");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 6), undefined);

assertEqual(findKey({
  "Suika": { stars: 4, closes: 11, price: "$$"},
  "Miku":   { stars: 4, closes: 10, price: "$$$$"},
  "Shiro":      { stars: 4, closes: 9, price: "$$"},
  "Kadoya":   { stars: 4, closes: 8, price: "$$"},
  "Minami":       { stars: 4, closes: 10, price: "$$"},
  "JapaDog Burrad":  { stars: 5, closes: 6, price: "$"}
}, x => x.closes === 6), "JapaDog Burrad");