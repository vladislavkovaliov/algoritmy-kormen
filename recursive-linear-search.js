function recursiveLinearSearch(array, n, i, x) {
  var answer = -1;

  if(i > n) {
    return {
      index: answer
    }
  } else if(i <= n) {
    if(array[i] === x) {
      return {
        index: i
      }
    } else if(array[i] !== x) {
      return recursiveLinearSearch(array, n, i + 1, x);
    }
  } 
}

var result1 = recursiveLinearSearch([1,2,3,4,5,6], 6, 0, 6);
var result2 = recursiveLinearSearch([1,2,3,4,5,6,7], 7, 0, 19);

console.log(result1);
console.log(result2);
