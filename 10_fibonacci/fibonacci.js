const fibonacci = function(input) {
  let target = Number(input);
  if (target < 0) return "OOPS";
  let a = 0;
  let b = 1;
  let next;
  let fibonacciNumbers = []
  for (let i = 0; i <= target; i++) {
    fibonacciNumbers.push(a);
    next = a + b;
    a = b;
    b = next;
  };
  return fibonacciNumbers[target];
};

// Do not edit below this line
module.exports = fibonacci;
