//  Problem: [Leet Code 125] https://leetcode.com/problems/valid-anagram/submissions/883209124/



// create frequeny map 
// and match the two maps
function isAnagram(s, t) {
  if (s.length !== t.length) return false

  const wordLength = s.length

  const sMap = {}
  const tMap = {}

  // O(n) 
  // space complexity = O(1)
  // create frequeny map 
  for (let i = 0; i < wordLength; i++) {
    const wordAtS = s[i]
    const wordAtT = t[i]

    if (!sMap[wordAtS]) {
      sMap[wordAtS] = 1
    } else {
      sMap[wordAtS]++
    }

    if (!tMap[wordAtT]) {
      tMap[wordAtT] = 1
    } else {
      tMap[wordAtT]++
    }
  }

  // now match the map
  for (let j = 0; j < wordLength; j++) {
    const wordToCheck = s[j]

    if (sMap[wordToCheck] !== tMap[wordToCheck]) {
      return false
    }
  }

  return true
}

const s = "rat"
const t = "tar"

console.log(isAnagram(s, t))