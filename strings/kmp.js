/**
 * Creating the Pi Table
 * 
 * take two index, test value:
 * 
 * if match - increase j, i increases by the loop iteration iteself
 * 
 * if a mismatch, j's index become the index of the last element where the match happened.
 * 
 */
function computePieTable(str) {
  const pieTable = []

  /**
   * Compute temporary array to maintain size of suffix which is same as prefix
   * Time/space complexity is O(size of pattern)
   */

  // the first element would always be zero
  pieTable.push(0)

  let j = 0

  for (let i = 1; i < str.length; i++) {

    const eleAtI = str[i]
    const eleAtJ = str[j]

    if (eleAtI === eleAtJ) {

      pieTable.push(j + 1)

      j++
    }

    else {
      const indexOfEleWithLastMatch = pieTable[pieTable.length - 1]
      if (j) {
        j = indexOfEleWithLastMatch - 1
      }

      if (str[i] === str[j]) {
        pieTable.push(j + 1)
        j++
      }

      else {
        pieTable.push(0)
      }
    }
  }

  return pieTable
}

function kmpSearch(str, toFindStr) {
  // go thru the str
  // i and j will be used to match the str
  // but on no match j doesn't start from the begninning of the 
  // toFindStr, but right from the right of the part where a repeating pattern 
  // is present

  let j = 0
  let i = 0

  const pieTable = computePieTable(toFindStr)

  while (i < str.length && j < toFindStr.length) {
    const eleAtI = str[i]
    const eleAtJ = toFindStr[j]

    if (eleAtI === eleAtJ) {
      j++
      i++
    }
    else {
      if (j) {
        j = pieTable[j - 1]
      } else {
        i++
      }
    }
  }

  return j === toFindStr.length || -1
}


const haystack = 'sadbutsad'
const needle = 'abcaby'

const str = 'sad'

// console.log(computePieTable(needle))

// console.log(kmpSearch(haystack, needle))