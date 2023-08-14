/**
 * Notes:
 * This first attempt didn't work because, I misunderstood the question thinking param k is the number of times a number should appear in the array.
 * I also increment the value before checking if it's equal to k, which is wrong since it'll skip the first number that appears k times.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const resultMap = new Map();
  const tempMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (resultMap.has(nums[i])) {
      continue;
    }

    if (tempMap.has(nums[i])) {
      let currentVal = tempMap.get(nums[i]) + 1;
      tempMap.set(nums[i], currentVal);

      if (currentVal === k) {
        resultMap.set(nums[i], 1);
      }
      continue;
    }
    tempMap.set(nums[i], 1);
  }
  return Array.from(resultMap.keys());
};

console.log(topKFrequent([1], 1));
