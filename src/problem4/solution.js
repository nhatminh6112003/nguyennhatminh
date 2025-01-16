var sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2;
};

var sum_to_n_c = function (n) {
  let sum = 0;
  [...Array(n).keys()].map(i => i + 1).forEach((num) => (sum += num));
  return sum;
};

console.log(sum_to_n_a(5));  // Sum of first 5 numbers
console.log(sum_to_n_b(5));  // Sum of first 5 numbers using formula
console.log(sum_to_n_c(5));  // Sum of first 5 numbers using array and map