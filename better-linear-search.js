/**
 * Better linear search in array
 *
 * @params
 * Array - array
 * Count of array - n
 * Value - x
 */
function betterLinearSearch(array, n, x) {
  var answer = -1;
  var iterations = 0;

  for(var i = 0; i < n; i++) {
    iterations++;

    if(array[i] === x) {
      return {
        iterations,
        index: i
      };
    }
  }

  return {
    iterations,
    index: answer
  };
}

var result1 = betterLinearSearch([1,2,3,4,5,6], 6, 4);
var result2 = betterLinearSearch([1,2,3,4,5,6,7], 7, 19);

console.log('Index:', result1);
console.log('Index:', result2);
