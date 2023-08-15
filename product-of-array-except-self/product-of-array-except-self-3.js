/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const leftArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      leftArr[i] = 1;
    } else {
      leftArr[i] = leftArr[i - 1] * nums[i - 1];
    }
  }

  const rightArr = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      rightArr[i] = 1;
    } else {
      rightArr[i] = rightArr[i + 1] * nums[i + 1];
    }
  }

  const answerArr = [];
  for (let i = 0; i < nums.length; i++) {
    answerArr[i] = leftArr[i] * rightArr[i];
  }

  return answerArr;
};
