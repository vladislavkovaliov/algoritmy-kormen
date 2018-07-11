function selectionSort(array, n) {
  var smallest;

  for(var i = 0; i < n - 1; i++) {
    smallest = i;

    for(var j = i + 1; j < n; j++) {
      if(array[j] < array[smallest]) {
        smallest = j;
      }
    }

    var tmp = array[i];
    array[i] = array[smallest];
    array[smallest] = tmp;
  }

  return {
    array
  };
}

var result1 = selectionSort([-1, 0, 6, -100, 5, 1], 6);
var result2 = selectionSort([3,7,5,4,1,7,3], 7);

console.log(result1);
console.log(result2);
