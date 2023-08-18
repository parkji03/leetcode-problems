/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let i = 0;
  let j = s.length - 1;
  let middle = Math.floor(s.length / 2);

  while (i <= middle && j >= middle) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("eeeeee"));
console.log(isPalindrome("park"));
console.log(isPalindrome("parkkrap"));
