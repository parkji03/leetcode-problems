/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;

  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const w = j - i;
    const h = Math.min(height[j], height[i]);
    const volume = w * h;

    if (volume > max) {
      max = volume;
    }

    if (height[i] < height[j]) {
      i++;
    } else if (height[i] > height[j]) {
      j--;
    } else {
      i++;
      j--;
    }
  }

  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
