//  Problem: [Leet Code 3] Longest Substring Without Repeating Characters  https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || typeof s !== "string") return ""

  const map = {}
  let start = 0
  let maxLength = Number.NEGATIVE_INFINITY

  for (let i = 0; i < s.length; i++) {
    const ele = s[i]

    if (map[ele] === undefined) {
      map[ele] = i
    } else {
      if (map[ele] >= start) {
        start = map[ele] + 1
      }
      map[ele] = i
    }

    maxLength = Math.max(maxLength, i - start + 1)
  }

  return maxLength
};