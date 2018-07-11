/**
 * Sentinel linear search in array
 *
 * @params
 * Array - array
 * Count of array - n
 * Value - x
 */
function sentinelLinearSearch(array, n, x) {
  var answer = -1;
  var last = array[n];
  var i = 0;
  array[n] = x;

  while(array[i] !== x) {
    i++;
  }

  array[n] = last;

  if(i < n || array[n] === x) {
    return {
      iterations: i,
      index: i
    };
  } else {
    return {
      iterations: i,
      index: answer
    };
  }
}

var result1 = sentinelLinearSearch([1,2,3,4,5,6], 6, 4);
var result2 = sentinelLinearSearch([1,2,3,4,5,6,7], 7, 19);

console.log('Index:', result1);
console.log('Index:', result2);
