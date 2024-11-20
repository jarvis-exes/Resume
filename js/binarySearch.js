function searchInArrayBinary(arr, targetValue) {
  let sortedArray = arr.sort((a, b) => a - b);

  function binarySearch(arr, value, start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      return binarySearch(arr, value, start, mid - 1);
    } else {
      return binarySearch(arr, value, mid + 1, end);
    }
  }

  return binarySearch(sortedArray, targetValue, 0, arr.length - 1);
}

const arrayToSearch = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetValue = 2;

console.log(searchInArrayBinary(arrayToSearch, targetValue));
