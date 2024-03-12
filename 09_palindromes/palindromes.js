const palindromes = function (string) {
  let refinedString = string.replace(/[\W_]/g, '').toLowerCase();
  return refinedString.split('').reverse().join('') === refinedString;
};

// Do not edit below this line
module.exports = palindromes;