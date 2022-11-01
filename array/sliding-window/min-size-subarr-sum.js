//  Problem: [Leet Code 209] Minimum Size Subarray Sum  https://leetcode.com/problems/minimum-size-subarray-sum/description/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (!nums.length) return 0

  let sum = 0

  let start = 0

  let minSizeArr = Number.POSITIVE_INFINITY

  for (let i = 0; i < nums.length; i++) {

    sum += nums[i]

    while (sum >= target) {
      // can we do better
      minSizeArr = Math.min(minSizeArr, i - start + 1)
      sum -= nums[start]
      start++
    }
  }

  return minSizeArr === Number.POSITIVE_INFINITY ? 0 : minSizeArr
};