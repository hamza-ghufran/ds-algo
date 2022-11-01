//  Problem: [Leet Code 118] Set Matrix Zeroes  https://leetcode.com/problems/pascals-triangle/

//  Input numRows = 5
//  Output  [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// To store calc result
const map = []
let lastPoint = 0

function genMap(size) {
  if (size <= lastPoint) {
    /**
     * If map was generated before we slice and return the array
     * no need to recompute and store
     */
    return map.slice(0, size)
  }

  for (let i = lastPoint; i < size; i++) {
    if (i === 0) {
      map.push([1])
      continue
    }
    if (i === 1) {
      map.push([1, 1])
      continue
    }

    const prevIndex = i - 1
    const prevData = map[prevIndex]

    // init current index data store
    map[i] = []

    for (let k = 0; k <= prevData.length; k++) {
      const p = prevData[k - 1]
      const q = prevData[k]

      /**
       * for 2
       * prevIndex = 1
       * 
       * we iterate all the way to prevIndex + 1
       * i.e -> i : 0 1 2
       * 
       * i - 1, i => 0 - 1, 0 = -1, 0
       * i - 1, i => 1 - 1, 1 = 0, 1
       * i - 1, i => 2 - 1, 2 = 1, 2
       * 
       * -1, 0  NaN, 1
       * 0, 1   1, 1
       * 1, 2   1, Nan
       * 
       * so, if either p || q is undefined for say prevIndex = 3
       * we are accessing either map[-1] || map[4] 
       * which would result in undefined
       * Therefore we push 1
       * In other words: 
       * if you encounter an edge just push 1 
       */

      if (!p || !q) {
        map[i].push(1)
      }
      else {
        map[i].push(p + q)
      }
    }
  }

  // Keep track of map size
  lastPoint = map.length
  return map.slice(0, size)
}

function generate(numRows: number): number[][] {
  if (numRows === 0) return []

  return genMap(numRows)
};

generate(1)
generate(3)
generate(4)
generate(5)
generate(2)