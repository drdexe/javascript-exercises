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
  return array.reduce((total, num) => total * num);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num === 0) return 1;
  return factorial(num - 1) * num;
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
