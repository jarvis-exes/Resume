function checkPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));
