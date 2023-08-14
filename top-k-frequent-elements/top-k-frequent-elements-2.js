/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const mappings = new Map();

  for (let num of nums) {
    if (mappings.has(num)) {
      mappings.set(num, mappings.get(num) + 1);
      continue;
    }

    mappings.set(num, 1);
  }

  return [...mappings.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
    .splice(0, k);
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
