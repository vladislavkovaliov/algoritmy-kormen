function recursiveBinarySearch(array, p, r, x) {
  var answer = -1;

  if(p > r) {
    return {
      index: answer
    };
  } else if(p <= r) {
    var q = Math.floor((p + r)/2);
    
    if(array[q] === x) {
      return {
        index: q
      };
    } else {
      if(array[q] > x) {
        return recursiveBinarySearch(array, p, q - 1, x);
      } else {
        return recursiveBinarySearch(array, q + 1, r, x);
      }
    }
  }
}

var result1 = recursiveBinarySearch([1,2,3,4,5,6], 0, 6, 6);
var result2 = recursiveBinarySearch([1,2,3,4,5,6,7], 0, 7, 19);
var result3 = recursiveBinarySearch([1], 0, 1, 6);
var result4 = recursiveBinarySearch([1], 0, 1, 1);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
