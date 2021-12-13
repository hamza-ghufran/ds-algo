//  Problem: [Leet Code 22] Generate Parentheses: https://leetcode.com/problems/generate-parentheses/

// When n = 3
// output [ '((()))', '(()())', '(())()', '()(())', '()()()' ]

function isInValidOrder(arr: string[]) {
  if (arr[0] !== '(') return false // should start with an opeing bracket
  const stack = []

  for (let j = 0; j < arr.length; j++) {
    const curr = arr[j]
    switch (curr) {
      case '(': {
        stack.push('(')
        break
      }
      case ')': {
        if (stack[stack.length - 1] === '(') {
          stack.pop()
        }
        break
      }
    }
  }
  if (stack.length) return false
  else return true
}

function generateParenthesis(n: number): string[] {

  let openBracketsCount = n
  let closeBracketsCount = n

  function isBracketAvailable(bracket: '(' | ')') {
    switch (bracket) {
      case '(': {
        if (openBracketsCount) {
          openBracketsCount--
          return true
        }
        return false
      }
      case ')': {
        if (closeBracketsCount) {
          closeBracketsCount--
          return true
        }
        return false
      }
    }
  }

  const arr = []
  const result = []

  function constructParan(n: number, arr: string[]) {
    if (!openBracketsCount && !closeBracketsCount) {
      // todo: optimize this part
      if (isInValidOrder(arr)) {
        const ans = JSON.parse(JSON.stringify(arr.join().replace(/\,/g, '')))
        result.push(ans)
      }
    }
    else {
      if (isBracketAvailable('(')) {
        arr.push('(')
        constructParan(n, arr)
        arr.pop()
        openBracketsCount++
      }
      if (isBracketAvailable(')')) {
        arr.push(')')
        constructParan(n, arr)
        arr.pop()
        closeBracketsCount++
      }
    }
  }

  constructParan(n, arr)
  return result
};

console.log(generateParenthesis(3))