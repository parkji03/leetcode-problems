/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let left = 0;
  let longestSubstring = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    longestSubstring = Math.max(charSet.size, longestSubstring);
  }

  return longestSubstring;
};
