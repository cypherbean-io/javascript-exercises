const repeatString = function(word, iterations) {
  let myString = "";
  if (iterations < 0) return "ERROR";
  for (i = 0; i < iterations; i++) {
    myString = myString.concat(word);
  }
  return myString;
};

// Do not edit below this line
module.exports = repeatString;
