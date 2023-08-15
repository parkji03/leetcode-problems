/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const hashMap = {};
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    let leftArr = [];
    let rightArr = [];

    leftArr = nums.slice(0, i);

    if (i + 1 < nums.length) {
      rightArr = nums.slice(i + 1, nums.length);
    }

    hashMap[i] = [...leftArr, ...rightArr];
  }

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    hashMap[i].forEach((num) => {
      product *= num;
    });

    ans.push(product);
  }

  return ans;
};

console.log(productExceptSelf([0, 0]));
