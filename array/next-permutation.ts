//  Problem: [Leet Code 31] Next Permutation  https://leetcode.com/problems/next-permutation/

/**
 * @Brute_Force
 * Backtracking
 * Generate all sequence find and return next greater seq
 */
const result = []

function genPermu(arr, ans, start) {
  if (ans.length === arr.length) {
    result.push(JSON.parse(JSON.stringify(ans)))
  }
  else {
    for (let i = start; i < arr.length; i++) {
      if (!ans.includes(i)) {
        ans.push(i)
        genPermu(arr, ans, start)
        ans.pop()
      }
    }
  }
}

genPermu([0, 1, 2, 3, 4, 5, 6], [], 0)

/**
 * @Optimal_soln
 * Understanding: https://www.youtube.com/watch?v=6qXO72FkqwM&ab_channel=TECHDOSE
 */

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function isAlreadInAscOrDescOrder(nums) {
  let isInAscOrder = []
  let isInDescOrder = []

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      isInDescOrder.push(1)
    } else {
      isInAscOrder.push(1)
    }
  }

  if (isInAscOrder.length === nums.length - 1) {
    swap(nums, nums.length - 2, nums.length - 1)
    return true
  } else if (isInDescOrder.length === nums.length - 1) {
    nums.reverse()
    return true
  }

  return false
}

function nextPermutation(nums: number[]): void {
  if (nums.length <= 1) return
  // need to optimize by removing this func 
  // and doing checks using the loop below
  if (isAlreadInAscOrDescOrder(nums)) return

  let index1
  let index2
  let nextGreaterValindex

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index1 = i
      break
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[index1]) {
      if (!nextGreaterValindex) {
        nextGreaterValindex = i
      } else {
        if (nums[nextGreaterValindex] > nums[i] && i > nextGreaterValindex) {
          nextGreaterValindex = i
        }
      }
    }
  }

  index2 = nextGreaterValindex

  swap(nums, index1, index2)
  nums.push(...nums.splice(index1 + 1).reverse())
};



let nums = []

nums = [6, 2, 1, 4, 5, 3, 0]
nextPermutation(nums)
console.log(nums)

nums = [1, 3, 5, 4, 2]
nextPermutation(nums)
console.log(nums)

nums = [1, 2]
nextPermutation(nums)
console.log(nums)

nums = [2, 1, 3]
nextPermutation(nums)
console.log(nums)