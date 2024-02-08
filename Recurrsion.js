const fib = (n, memo = []) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  if (memo[n] != null) {
    return memp[n];
  }

  memo[n] = fib(n - 2) + fib(n - 1);

  return memo[n];
};

const result = fib(5);
console.log(result);
