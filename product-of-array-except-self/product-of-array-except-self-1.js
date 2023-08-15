/**
 * Brute force method
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      product *= nums[j];
    }

    ans.push(product);
  }

  return ans;
};
