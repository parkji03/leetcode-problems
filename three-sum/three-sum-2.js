/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const threeSum = nums[i] + nums[j] + nums[k];
      if (threeSum > 0) {
        k--;
      } else if (threeSum < 0) {
        j++;
      } else {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j] === nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
