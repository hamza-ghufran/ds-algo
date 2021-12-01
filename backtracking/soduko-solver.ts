// Problem: [Leet Code 37] Sudoku Solver: https://leetcode.com/problems/sudoku-solver/

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

/* The input board is shown above and the only valid solution is shown below: */

const output_board = [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
  ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
  ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
  ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
  ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
  ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
  ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
  ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
]

const DIMENSION = 3

/**
 * 
 * A sudoku solution must satisfy all of the following rules:
 * 
 * 1. Each of the digits 1-9 must occur exactly once in each row. 
 */
function isUniqueNumberInRow(board, i, j, val) {
  const row = board[i]

  return !row.includes(val)
}

/* 2. Each of the digits 1-9 must occur exactly once in each column. */
function isUniqueNumberInCol(board, i, j, val) {
  const boardLength = board.length

  for (let k = 0; k < boardLength; k++) {
    if (board[k][j] === val) return false
  }

  return true
}

/* 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid. */
function isValidNumberInMiniGrid(board, i, j, val) {
  const yOffset = Math.floor(j / DIMENSION) * DIMENSION
  const xOffset = Math.floor(i / DIMENSION) * DIMENSION

  for (let row = 0; row < DIMENSION; row++) {
    for (let col = 0; col < DIMENSION; col++) {
      const posX = xOffset + row
      const posY = yOffset + col

      if (board[posX][posY] === val) {
        return false
      }
    }
  }

  return true
}

function removeFromBoard(board, i, j) {
  board[i][j] = "."
}

function writeToBoard(board, i, j, val) {
  board[i][j] = val
}

function isValidNumberForPos(board, i, j, val) {
  return Boolean(
    isUniqueNumberInRow(board, i, j, val) &&
    isUniqueNumberInCol(board, i, j, val) &&
    isValidNumberInMiniGrid(board, i, j, val)
  )
}

function isEmpty(board, i, j) {
  return board[i][j] === "."
}

function solveSudoku(board: string[][]): void {
  process(board)

  function process(board) {
    const boardLength = board.length

    for (let row = 0; row < boardLength; row++) {
      for (let col = 0; col < boardLength; col++) {

        if (isEmpty(board, row, col)) {

          for (let k = 1; k <= 9; k++) {
            const number = `${k}`

            const condition = isValidNumberForPos(board, row, col, number)

            if (condition) {
              writeToBoard(board, row, col, number) // choice

              if (process(board)) return board // test choice

              else removeFromBoard(board, row, col) // undo choice - backtrack
            }
          }

          return false // no solution found - next step backtrack
        }
      }
    }

    return true // reached end of board with a valid solution 
  }
};

solveSudoku(board)
