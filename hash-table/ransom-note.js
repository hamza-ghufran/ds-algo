//  Problem: [Leet Code 383] https://leetcode.com/problems/ransom-note/description/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

  const existingWords = {}


  // one pass - n
  for (let i = 0; i < magazine.length; i++) {
    if (!existingWords[magazine[i]]) {
      existingWords[magazine[i]] = 0
    }
    existingWords[magazine[i]]++
  }

  let j = 0

  while (j < ransomNote.length) {
    if (!existingWords[ransomNote[j]]) {
      return false
    }
    else {
      existingWords[ransomNote[j]]--
    }
    j++
  }

  return true
};

const ransomNote = "aa"
const magazine = "aab"

console.log(canConstruct(ransomNote, magazine))