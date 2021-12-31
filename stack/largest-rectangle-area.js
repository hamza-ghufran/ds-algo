//  Problem: [Leet Code 84] https://leetcode.com/problems/largest-rectangle-in-histogram/

// Input: heights = [2,1,5,6,2,3]
// Output: 10

const heights = [2, 1, 5, 6, 2, 3]

function travserLeftToRight(data) {
  const len = data.length
  // build stack in ascending order
  // left - to store left most limit of an ele shorter than curr ele
  const stack = []
  const left = []

  stack.push(0)
  left.push(0)

  for (let i = 1; i < len; i++) {
    const curr = data[i]

    let top = stack.pop()
    let topEle = data[top]

    while (topEle >= curr && stack.length) {
      top = stack.pop()
      topEle = data[top]
    }

    if (topEle < curr) {
      // push the top ele index back to stack
      // store curr ele index to stack
      // set top indx + 1 as the left most limit for index i
      stack.push(top)
      stack.push(i)
      left.push(top + 1)
    } else {
      // stack empty
      // set 0th index as the left most limit for index i
      stack.push(i)
      left.push(0)
    }
  }

  return left
}

function travserRightToLeft(data) {
  const len = data.length - 1

  const stack = []
  const right = []

  stack.unshift(len)
  right.unshift(len)

  for (let i = len - 1; i >= 0; i--) {
    const curr = data[i]

    let top = stack.shift()
    let topEle = data[top]

    while (topEle >= curr && stack.length) {
      top = stack.shift()
      topEle = data[top]
    }

    if (topEle < curr) {
      stack.unshift(top)
      stack.unshift(i)
      right.unshift(top - 1)
    }
    else {
      stack.unshift(i)
      right.unshift(len)
    }
  }

  return right
}

function largestRectangleArea(heights) {
  const left = travserLeftToRight(heights)
  const right = travserRightToLeft(heights)

  const result = []
  for (let i = 0; i < heights.length; i++) {
    const width = ((right[i] - left[i]) + 1) * heights[i]
    result.push(width)
  }
  // console.log(left)
  // console.log(right)
  // console.log(result)
  return Math.max(...result)
}

const ans = largestRectangleArea(heights)

console.log(ans)