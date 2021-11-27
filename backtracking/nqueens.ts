// Problem: [Leet Code 52] N-Queens II https://leetcode.com/problems/n-queens-ii/
// Understanding: https://www.youtube.com/watch?v=xFv_Hl4B83A

const record = {
  rowCols: [],
  isAnotherQueenAtRow: {},
  isAnotherQueenAtCol: {},
  isAnotherQueenDiagonallyPlaced: function (i, j) {
    let flag = false

    this.rowCols.forEach(element => {
      const row = element[0]
      const col = element[1]

      const deltaRow = Math.abs(row - i)
      const deltaCol = Math.abs(col - j)

      if (deltaRow === deltaCol) flag = true
    });

    return flag
  }
}

function genBoard(n: number) {
  return Array(n).fill('').map(_ => Array(n).fill('#'))
}

function storeInRecord(i, j) {
  record.rowCols.push([i, j])
  record.isAnotherQueenAtRow[i] = true
  record.isAnotherQueenAtCol[j] = true
}

function isValidPosition(i, j) {
  if (record.isAnotherQueenAtRow[i]) return false
  if (record.isAnotherQueenAtCol[j]) return false
  if (record.isAnotherQueenDiagonallyPlaced.call(record, i, j)) return false

  return true
}

function removeFromRecord(i, j) {
  delete record.isAnotherQueenAtRow[i]
  delete record.isAnotherQueenAtCol[j]

  record.rowCols = record.rowCols
    .filter((postion) => !(postion[0] === i && postion[1] === j))
}

function totalNQueens(n: number): number {
  const board = genBoard(n)
  const result = []

  function placeQueen(i, j) {
    board[i][j] = 'Q'
  }

  function removeQueen(i, j) {
    board[i][j] = '#'
  }

  function traverse(row: number) {
    if (row === n) {
      result.push(JSON.parse(JSON.stringify(board))) // goal
    }
    else {
      for (let col = 0; col < n; col++) {
        if (isValidPosition(row, col)) { // choice
          storeInRecord(row, col)
          placeQueen(row, col)

          traverse(row + 1)              // test choice

          removeQueen(row, col)
          removeFromRecord(row, col)     // undo choice
        }
      }
    }
  }

  traverse(0)
  return result.length
};

const BOARD = 8

const result = totalNQueens(BOARD)

console.log(result)