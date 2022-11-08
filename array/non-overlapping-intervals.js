//  Problem: [Leet Code 435] Non-overlapping Intervals https://leetcode.com/problems/non-overlapping-intervals/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let i = 1
  let count = 0
  let prevEnd = intervals[0][1]

  while (true) {
    if (!intervals[i]) break
    const start = intervals[i][0]
    const end = intervals[i][1]

    if (start >= prevEnd) {
      prevEnd = end
    }
    else {
      prevEnd = Math.min(prevEnd, end)
      count++
    }

    i++
  }

  return count
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]))
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]]))
console.log(eraseOverlapIntervals([[1, 2], [2, 3]]))