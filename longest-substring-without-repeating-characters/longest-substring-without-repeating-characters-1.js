/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  const stringArr = s.split("");

  let ansArr = [];

  let currentArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    if (charSet.has(stringArr[i])) {
      charSet.clear();
      currentArr = [stringArr[i]];
      charSet.add(stringArr[i]);
    } else {
      charSet.add(stringArr[i]);
      currentArr.push(stringArr[i]);
    }

    if (currentArr.length > ansArr.length) {
      ansArr = currentArr;
    }
  }

  return ansArr.length;
};

console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("abcdef"));
console.log(lengthOfLongestSubstring("dvdf"));
