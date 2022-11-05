//  Problem: [Leet Code 1944] Daily Temperatures https://leetcode.com/problems/number-of-visible-people-in-a-queue/description/


// Aslo used right pointer
/**
 * @param {number[]} heights
 * @return {number[]}
 */

function stackPush(stack, index) {
  stack.unshift(index)
}

function stackPop(stack) {
  return stack.shift()
}

function stackTop(stack) {
  return stack[0]
}

function incrementVal(record, index) {
  if (record[index] === undefined) {
    record[index] = 1
    return
  }

  record[index]++
}

var canSeePersonsCount = function (heights) {
  const stack = []
  const record = []
  let j = heights.length - 1

  while (j >= 0) {
    while (stack.length && heights[j] > heights[stackTop(stack)]) {
      incrementVal(record, j)

      const stackEleIndex = stackPop(stack)
      if (stack.length) {
        incrementVal(record, stackEleIndex)
      }
    }

    stackPush(stack, j)
    j--
  }

  while (stack.length) {
    const s = stackPop(stack)
    if (stack.length) {
      if (!record[s]) {
        record[s] = 0
      }
      record[s]++
    }
  }

  record.push(0)
  return record
};

const heights = [1, 2, 3, 4]

const result = canSeePersonsCount(heights)

console.log(result)
