//  Problem: [Leet Code 238] Product of Array Except Self https://leetcode.com/problems/product-of-array-except-self/submissions/839291118/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = []

  const prefixer = (index, valAtIndex) => {
    if (index === 0) {
      fix = 1
    }

    output[index] = fix
    fix *= valAtIndex
  }

  const postfixer = (index, valAtIndex) => {
    if (index === nums.length - 1) {
      fix = 1
    }

    output[index] *= fix
    fix *= valAtIndex
  }

  for (let i = 0; i < nums.length; i++) {
    prefixer(i, nums[i])
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    postfixer(i, nums[i])
  }

  return output
};

// console.log(productExceptSelf([1, 2, 3, 4]))