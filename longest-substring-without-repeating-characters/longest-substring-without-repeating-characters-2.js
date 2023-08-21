/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const stringArr = s.split("");
  const charSet = new Set();

  let longestSubstring = 0;
  for (let i = 0; i < stringArr.length; i++) {
    const currentChar = stringArr[i];
    charSet.add(currentChar[i]);

    let j = i + 1;
    while (j < stringArr.length && currentChar !== stringArr[j]) {
      const iterChar = stringArr[j];
      if (!charSet.has(iterChar)) {
        charSet.add(iterChar);
      } else {
        break;
      }

      j++;
    }

    if (charSet.size > longestSubstring) {
      longestSubstring = charSet.size;
    }

    charSet.clear();
  }

  return longestSubstring;
};

console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("abcdef"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("abcabcbb"));
