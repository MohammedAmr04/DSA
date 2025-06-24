// Selection Sort Implementation

// Ascending order (small to big)
function selectionSortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSortAsc([2, 7, 1, 5, 3])); // [1, 2, 3, 5, 7]

// Descending order (big to small)
function selectionSortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSortDesc([2, 7, 1, 5, 3])); // [7, 5, 3, 2, 1]
