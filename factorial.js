function factorial(n) {
  if(n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var result1 = factorial(5);
var result2 = factorial(0);
var result3 = factorial(1);

console.log(result1);
console.log(result2);
console.log(result3);
