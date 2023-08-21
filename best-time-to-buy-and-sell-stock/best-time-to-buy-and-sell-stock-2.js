/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      currentProfit = prices[right] - prices[left];
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    } else {
      left = right;
    }
    right++;
  }

  return profit;
};
