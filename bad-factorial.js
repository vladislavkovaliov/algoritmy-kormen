function badFactorial(n) {
  if(n === 0) {
    return 1;
  } else {
    return badFactorial(n + 1) / (n + 1);
  }
}

var result1 = badFactorial(5);
var result2 = badFactorial(0);
var result3 = badFactorial(1);

console.log(result1);
console.log(result2);
console.log(result3);

