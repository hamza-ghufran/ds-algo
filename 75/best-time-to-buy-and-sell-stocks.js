//  Problem: [Leet Code 121] Best Time to Buy and Sell Stock https://leetcode.com/problems/best-time-to-buy-and-sell-stock/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0

  let i = 1
  let j = 0

  while (i < prices.length) {
    const currPriceVal = prices[i]
    const lowestPriceVal = prices[j]

    if (currPriceVal > lowestPriceVal) {
      maxProfit = Math.max(maxProfit, currPriceVal - lowestPriceVal)
      i++
    }

    else {
      j = i
      i++
    }
  }

  return maxProfit
}