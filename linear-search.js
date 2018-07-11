/**
 * Linear search in array
 *
 * @params
 * Array - array
 * Count of array - n
 * Value - x
 */
function linearSearch(array, n, x) {
  var answer = -1;
  var iterations = 0;

  for(var i = 0; i < n; i++) {
    iterations++;

    if(array[i] === x) {
      answer = i;
    }
  }

  return {
    iterations, 
    index: answer
  };
}

var result1 = linearSearch([1,2,3,4,5,6], 6, 6);
var result2 = linearSearch([1,2,3,4,5,6,7], 7, 19);

console.log(result1);
console.log(result2);
