//  Problem: [Leet Code 73] Set Matrix Zeroes  https://leetcode.com/problems/set-matrix-zeroes/

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

/**
 * @BruteForce
 */
function setZeroes(matrix: number[][]): void {
  const rowsAndColToAlter = []

  for (let i = 0; i < matrix.length; i++) {
    const currArr = matrix[i]

    for (let j = 0; j < currArr.length; j++) {
      const ele = currArr[j]
      if (ele === 0) {
        rowsAndColToAlter.push([i, j])
      }
    }
  }

  rowsAndColToAlter.forEach((ele) => {
    const rowToAlter = ele[0]
    const colToAlter = ele[1]

    for (let j = 0; j < matrix[rowToAlter].length; j++) {
      matrix[rowToAlter][j] = 0
    }

    for (let i = 0; i < matrix.length; i++) {
      matrix[i][colToAlter] = 0
    }
  })

  // console.log(matrix)
};

setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, -10000]])


/**
 * 
 * @Optimized_solution
 *  
 * Time Complexity : O(M * N)
 * Space Complexity : O(1)
 */
function _setZeroes(matrix: number[][]): void {
  // The idea is that we can use the first cell of every row and column as a flag.
  /** 
   * @Marking_Phase
   * 
   * if [i][j] === 0 
   * we mark its corresponding row and col as 0
   *                           [i]     [j]
   *                   i.e     [i][0]=[0][j]=0
   *  eg. 
   *  [1,1,1]
   *  [1,0,1]  
   *  [1,1,1]
   * 
   *  since [1][1] = 0 for the above matrix
   *  we mark  [1][0] & [0][1] as 0
   *  the above matrix becomes: 
   *
   *  [1,0,1]
   *  [0,0,1]
   *  [1,1,1]
   * 
   * NOTE:
   * Since we take the first row and col as markers: 
   * we flag the col if any of the [i][0] is already zero
   * 
   * later we check if the col was flagged, if yes then we mark all the first col as 0
   * 
   * Similarily for row, all we need to check is if [0][0] === 0
   * since we are anyway marking corresponding rows as 0
   *  
   * In code: 
   **/

  let flagCol = false

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) flagCol = true

    // if we start from j = 0 then:
    // if [2][0] = 0 then [0][0] = 0, which we do not want
    // flagCol is used to keep a check if any element in the first col is 0
    // so we skip checks for the first col
    // if [2][1] = 0 we do set [2][0] = 0 &  [0][1] =0
    // we are only skipping checks not assignment of first col
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }
  /**
   * @ReassigningPhase
   * 
   * We now iterate over the array again
   * 
   * if the #FIRST element of the #ROW being iterated over is 0  | [i][0] === 0
   ** OR
   * if the #FIRST element of the #COL being iterated over is 0  | [0][j] === 0
   * 
   * we asssign [i][j] as 0
   * 
   * In code:
   */
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  // check if any element in the marker row = 0
  // just checking for [0][0] will do the job
  if (matrix[0][0] === 0) {
    const cols = matrix[0].length
    for (let i = 0; i < cols; i++) {
      matrix[0][i] = 0
    }
  }

  // mark all the col elements as zero if the marker array itself had a zero 
  if (flagCol) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0
    }
  }
}

_setZeroes(
  [[1, 1, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1]]
)