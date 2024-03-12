const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	let b = 1;
  let array= [];
  while (b <= a) {
    array.push(b);
    b++;
  }
  return array.reduce((total, num) => total * num, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
