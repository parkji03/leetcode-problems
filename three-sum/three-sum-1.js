/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const pairMapping = new Map();
  const singleMapping = new Map();
  const answerSet = new Set();

  nums.sort((a, b) => b - a);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (!singleMapping.has(nums[i])) {
      singleMapping.set(nums[i], i);
    }
  }

  let i = 0;
  let j = 1;
  while (i < nums.length - 1 && j < nums.length) {
    const sumOfTwo = nums[i] + nums[j];
    if (!pairMapping.has(sumOfTwo)) {
      pairMapping.set(sumOfTwo, [nums[i], nums[j]]);

      const complimentOfTwo = 0 - sumOfTwo;
      if (singleMapping.has(complimentOfTwo)) {
        const indexOfCompliment = singleMapping.get(complimentOfTwo);
        if (indexOfCompliment !== i && indexOfCompliment !== j) {
          let triplet = [nums[i], nums[j], complimentOfTwo];
          const tripletString = JSON.stringify(triplet.sort());
          answerSet.add(tripletString);
        }
      }
    }

    i++;
    j++;
  }
  return Array.from(answerSet).map((val) => JSON.parse(val));
};

console.log(threeSum([-1, 0, 1, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
console.log(threeSum([-2, 0, 0, 2, 2]));
