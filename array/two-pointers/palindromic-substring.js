
//  Problem: [Leet Code 647] Palindromic Substrings https://leetcode.com/problems/palindromic-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function (s) {
  let i = 0

  let a = 0
  let b = 0

  let count = 0

  while (i < s.length) {
    a = i
    b = i

    while ((a >= 0 && b < s.length) && (s[a] === s[b])) {
      count++
      a--
      b++
    }

    i++
  }

  i = 0

  while (i < s.length) {
    a = i
    b = i + 1

    while ((a >= 0 && b < s.length) && (s[a] === s[b])) {
      count++
      a--
      b++
    }

    i++
  }

  return count
};


const s = "abc"

console.log(countSubstrings(s))