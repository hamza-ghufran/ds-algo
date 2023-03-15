//  Problem: [Leet Code 77] https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

  function genCombintion(startPoint, arr) {
    if (arr.length === k) {
      ans.push(arr.slice())
      return
    }

    for (let i = startPoint + 1; i <= n; i++) {
      arr.push(i)
      genCombintion(i, arr)
      arr.pop()
    }
  }

  const arr = []
  const ans = []
  genCombintion(0, arr)
  return ans
}
