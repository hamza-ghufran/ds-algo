// Problem: [Leet Code 1] https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  let i = 0

  const map = {}

  // target = a + b
  // target - a = b
  // we need to find the existence of b and return its index
  while (i < nums.length) {
    const a = nums[i]
    const b = (target - a)

    const indexOfBInMap = map[b]

    if (indexOfBInMap) {
      return [i, indexOfBInMap]
    } else {
      // store a which later might be refered to as b
      map[a] = i
    }
  }
}

const num = [2, 7, 11, 15]
const target = 9
