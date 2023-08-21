/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let low = 0;

  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      low = prices[i];
      continue;
    }

    if (prices[i] > low) {
      const currentProfit = prices[i] - low;
      if (currentProfit > profit) {
        high = prices[i];
        profit = currentProfit;
      }
    } else if (prices[i] < low) {
      low = prices[i];
    }
  }

  return profit;
};
