const reverseString = function(word) {
  let wordArray = word.split("");
  let newWord = "";
  while (wordArray.length > 0) {
    newWord += wordArray.pop();
  }
  return newWord;
};

// Do not edit below this line
module.exports = reverseString;
