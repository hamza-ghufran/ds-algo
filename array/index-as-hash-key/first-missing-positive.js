//  Problem: [Leet Code 41] First Missing Positive https://leetcode.com/problems/first-missing-positive/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

 var firstMissingPositive = function (nums) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = 0
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const number = Math.abs(nums[i])
    const indexOfNumberInArr = number - 1

    if (nums[indexOfNumberInArr] === 0) {
      nums[indexOfNumberInArr] = (nums.length + 1) * -1
      continue
    }

    if (nums[indexOfNumberInArr] > 0) {
      nums[indexOfNumberInArr] *= -1
    }
  }

  for (let i = 1; i < nums.length + 1; i++) {
    const isNumberPresent = nums[i - 1] >= 0
    if (isNumberPresent) return i
  }

  return nums.length + 1
};

const nums = [3, 4, -1, 1]

console.log(firstMissingPositive(nums))
