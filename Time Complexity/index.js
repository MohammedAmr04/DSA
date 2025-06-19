// implmentation binary search
function search(key, sortedArray) {
  let low = 0,
    high = sortedArray.length - 1,
    mid;
  while (low <= high) {
    mid = Math.round((low + high) / 2);
    if (key === sortedArray[mid]) {
      return mid + 1;
    }
    if (key < sortedArray[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return "None";
}

let my_list = [1, 3, 5, 7, 9];

console.log(search(7, my_list));
console.log(search(13, my_list));
