//  Problem: [Leet Code 739] Daily Temperatures https://leetcode.com/problems/daily-temperatures/description/

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73]

let i = 0
const stack = []
const record = temperatures.map((t) => 0)

function stackPush(index) {
  stack.unshift(index)
}

function stackPop() {
  return stack.shift()
}

while (i < temperatures.length) {

  if (i === 0) {
    stackPush(i)
  } else {
    while (stack.length && temperatures[i] > temperatures[stack[0]]) {
      const stackIndex = stackPop()
      record[stackIndex] = (i - stackIndex)
    }

    stackPush(i)
  }

  i++
}

console.log(record)