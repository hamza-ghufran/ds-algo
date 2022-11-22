/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {}
  let i = 0

  while (i < nums.length) {
    const ele = nums[i]

    const numberNeeded = (target - ele)

    const indexOfTheRequiredNumberInMap = map[numberNeeded]

    if (indexOfTheRequiredNumberInMap) {
      return [indexOfTheRequiredNumberInMap, i]
    }
    else {
      // VAL | It's INDEX
      map[ele] = i
    }
    i++
  }
};