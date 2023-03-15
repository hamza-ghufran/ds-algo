//  Problem: [Leet Code 22] https://leetcode.com/problems/generate-parentheses/submissions/915728978/

// open only if les than equal to n
// close if only close < open
// close === open === n ==> valid

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    let closeCount = 0
    let openCount = 0
    const ans = []

    function buildParanthesis(n, arr) {
        if (openCount === closeCount) {
            if (closeCount === n) {
                ans.push(JSON.parse(JSON.stringify(arr.join().replace(/\,/g, ''))))
                return
            }
        }
        if (openCount <= n) {
            arr.push('(')
            openCount++
            buildParanthesis(n, arr)
            arr.pop()
            openCount--
        }
        if (closeCount < openCount) {
            arr.push(')')
            closeCount++
            buildParanthesis(n, arr)
            arr.pop()
            closeCount--
        }
    }

    const arr = []

    buildParanthesis(n, arr)
    return ans
}

// console.log(generateParenthesis(8))