function insertionSort(array, n) {
  for(let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;
    
    while(j > -1 && array[j] > key) { 
      array[j + 1] = array[j];
      console.log(i, j, key,array);
      j--;
    }

    array[j + 1] = key;
  }

  return {
    array
  };
}

var result1 = insertionSort([-1, 0, 6, -100, 5, 1], 6);
var result2 = insertionSort([3,7,5,4,1,7,3], 7);

console.log(result1);
console.log(result2);
