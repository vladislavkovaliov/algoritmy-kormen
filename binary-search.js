function binarySearch(array, n, x) {
  var answer = -1;
  var p = 0;
  var r = n;
  var q;

  while(p <= r) {
    q = Math.ceil((p + r)/2);
    
    if(array[q] === x) {
      return {
        index: q
      };
    } else {
      if(array[q] > x) {
        r = q - 1;
      } else {
        p = q + 1;
      }
    }    
  }

  return {
    index: answer
  };
}

var result1 = binarySearch([1,2,3,4,5,6], 6, 6);
var result2 = binarySearch([1,2,3,4,5,6,7], 7, 19);

console.log(result1);
console.log(result2);
