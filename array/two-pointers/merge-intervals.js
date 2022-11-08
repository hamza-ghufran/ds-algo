//  Problem: [Leet Code 56] Merge Intervals https://leetcode.com/problems/merge-intervals/description/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })

  const arr = [intervals[0]]
  let i = 0
  let j = 0

  while (i < intervals.length - 1) {
    if (!intervals[j] || !arr[i]) break

    const currLast = arr[i][1]
    const nextFirst = intervals[j] && intervals[j][0]
    if (currLast >= nextFirst) {
      arr[i] = [arr[i][0], Math.max(arr[i][1], intervals[j][1])]
      j++
    } else {
      arr.push(intervals[j])
      i++
    }
  }

  return arr
};


const arr1 = [[1, 3], [2, 6], [8, 10], [15, 18]]
const arr = [[1, 4], [0, 2], [3, 5]]

const result = merge(arr1)

console.log(result)