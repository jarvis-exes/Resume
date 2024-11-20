function longestWord(str) {
  const words = str.split(" ");
  let longest = 0;

  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }

  return longest;
}

console.log(longestWord("123 123456 12 1234567"));
