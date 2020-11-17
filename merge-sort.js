function mergeSort(array) {
    const q = Math.ceil(array.length /  2);
    if (array.length === 1) {
        return array;
    }
    const left = array.slice(0, q);
    const right = array.slice(q);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const array = [];
    let i = j = 0;
    while(i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            array.push(right[j]);
            j++;
        } else {
            array.push(left[i]);
            i++;
        }
    }
    return [
        ...array,
        ...left.slice(i),
        ...right.slice(j),
    ];
}

const t = mergeSort([12,9,3,7,14,11,6,2,10,5]);

console.log(t);
