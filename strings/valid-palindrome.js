//  Problem: [Leet Code 125] https://leetcode.com/problems/valid-palindrome/

// remove non-alphanumeric values
// make all lowercase
// O(n)
function sanitizeStr(s) {
  const lowerCaseStr = s.toLowerCase()

  const str = []
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const code = lowerCaseStr.charCodeAt(i)

    if (lowerCaseStr[i] === ' ') {
      continue
    }

    if (code < 97 || code > 122) {
      if (code > 47 && code < 58) {
        str.push(lowerCaseStr[i])
      }
      continue
    }

    console.log(lowerCaseStr[i], code)
    str.push(lowerCaseStr[i])
  }

  return str.join('')
}

// O(n)
function isPalindrome(s) {

  const str = sanitizeStr(s)

  let i = 0
  let j = str.length - 1

  while (i < str.length && j >= 0) {

    if(i == j){
      return true
    }

    const charAtI = str[i]
    const charAtJ = str[j]

    if (charAtI !== charAtJ) {
      return false
    }
    i++
    j--
  }

  return true
}

const s = "A man, a plan, a canal: Panama"

const result = isPalindrome(s)

console.log(result)