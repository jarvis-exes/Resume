//count the unique chars in the array

const arr = ["a", "b", "b", "b", "a", "c", "c", "c"];

function countUniqueChars(arr) {
  const charCount = {};
  for (char of arr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  return charCount;
}

console.log(countUniqueChars(arr));
