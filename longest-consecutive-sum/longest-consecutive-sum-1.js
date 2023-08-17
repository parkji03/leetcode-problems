/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let ans = 0;
  let buffer = [];
  const sorted = nums.sort((a, b) => a - b);
  console.log(sorted);

  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      continue;
    }

    if (sorted[i - 1] + 1 === sorted[i]) {
      buffer.push(sorted[i - 1]);

      if (
        sorted[i] - 1 === sorted[i - 1] &&
        i < sorted.length - 1 &&
        sorted[i + 1] !== sorted[i] + 1
      ) {
        buffer.push(sorted[i]);
      }

      if (i === sorted.length - 1 && sorted[i] - 1 === sorted[i - 1]) {
        buffer.push(sorted[i]);
      }
    } else {
      buffer = [];
    }

    if (buffer.length > ans) {
      ans = buffer.length;
    }
  }

  return ans;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([4, 1, 3, 2]));
