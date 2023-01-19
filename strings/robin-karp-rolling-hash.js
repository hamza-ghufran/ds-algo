//  Problem: [Leet Code 28] https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

const basicHashing = () => {

  const charCodes = {}
  const start = 97
  const end = 122

  let count = 1
  for (let i = start; i <= end; i++) {
    charCodes[String.fromCharCode(i)] = count++
  }

  function getHashOfCurrentView(str) {
    let hash = 0
    str.forEach((s) => {
      hash += charCodes[s]
    })
    return hash
  }

  const str = 'abfeotp'
  const toFind = 'otp'

  const lengthOfStringToFind = toFind.length // 3

  let toFingHash = getHashOfCurrentView(toFind.split(''))

  let currentView = []

  for (let i = 0; i <= str.length; i++) {
    if (i <= lengthOfStringToFind - 1) {
      currentView.push(str[i])
      continue
    }

    console.log(currentView)

    if (toFingHash === getHashOfCurrentView(currentView)) {
      // double check
      console.log('found')
    }

    currentView.shift()
    currentView.push(str[i])
  }
}


// --------------
// --------------
// --------------
// --------------
// --------------
// With rolling hash

const withRollingHash = () => {
  const charCodes = {}
  const start = 97
  const end = 122

  let count = 1
  for (let i = start; i <= end; i++) {
    charCodes[String.fromCharCode(i)] = count++
  }

  const str = 'leetcode'
  const toFindStr = 'leeto'

  const lengthOfStringToFind = toFindStr.length // 3

  const BASE = 10

  let currentHash = 0

  function setHash(str) {
    const n = lengthOfStringToFind
    let hash = 0

    let strIt = 0
    for (let i = n - 1; i >= 0; i--) {
      const power = i

      hash += charCodes[str[strIt]] * Math.pow(BASE, power)
      strIt++
    }
    return hash
  }

  const currentView = []

  const toFingHash = setHash(toFindStr)

  function rollHash({ outGoingEle, inComingEle }) {
    // spit out the left most ele hash value
    // will at a power equal to the lengthOfStringToFind - 1
    currentHash -= (charCodes[outGoingEle] * Math.pow(BASE, lengthOfStringToFind - 1))

    // we then multiply the whole hash by BASE
    // that ways all the element kind shift to the left
    // i.e increase in BASE power by 1
    // eg. left most after 10^3 is 10^2
    // * BASE makes 10^2 ==> 10^3
    currentHash *= BASE

    // then the new ele hash value is added to the currentHash
    currentHash += (charCodes[inComingEle] * Math.pow(BASE, 0))
  }

  for (let i = 0; i <= str.length; i++) {
    if (i <= lengthOfStringToFind - 1) {
      currentView.push(str[i])
      continue
    }

    if (!currentHash) {
      currentHash = setHash(str)
    }

    if (toFingHash === currentHash) {

      let matchCount = lengthOfStringToFind - 1

      while (matchCount) {
        if (toFindStr[matchCount] !== currentView[matchCount]) {
          break;
        }
        matchCount--
      }

      if (!matchCount) return i - lengthOfStringToFind
    }

    rollHash({ outGoingEle: currentView.shift(), inComingEle: str[i] })
    currentView.push(str[i])
  }

  return -1
}

console.log(withRollingHash())