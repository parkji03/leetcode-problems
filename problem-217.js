/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const mappings = {};

  for (let i = 0; i < nums.length; i++) {
    if (!mappings[nums[i]]) {
      mappings[nums[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
