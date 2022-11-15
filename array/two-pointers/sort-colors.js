//  Problem: [Leet Code 75] Sort Colors https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function (nums) {

  let a = 0;
  let b = nums.length - 1

  let i = 0

  while (i < nums.length && i <= b) {
    const eleAtStartPointer = nums[a]
    const eleAtEndPointer = nums[b]

    const currEle = nums[i]

    if (currEle === 0) {
      if (eleAtStartPointer !== 0) {
        let temp = nums[a]
        /**  real deal */
        nums[a] = currEle
        /**  real deal */
        nums[i] = temp
      }

      a++
    }
    else if (currEle === 2) {
      if (eleAtEndPointer !== 2) {
        let temp = nums[b]
        nums[b] = currEle
        nums[i] = temp
      }
      i--
      b--
    }

    i++
  }

  console.log(nums)

  return nums
};


const nums = [2, 0, 1]


console.log(sortColors(nums))
