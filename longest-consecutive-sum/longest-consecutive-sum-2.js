/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let largestSeq = 1;
      let iter = num;
      while (set.has(iter + 1)) {
        largestSeq++;
        iter++;
      }

      if (largestSeq > ans) {
        ans = largestSeq;
      }
    }
  }

  return ans;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([4, 1, 3, 2]));
console.log(longestConsecutive([4, 1]));
console.log(longestConsecutive([0]));
