const knightMoves = (init, end) => {
  const valid = (row, col) => {
    return 0 <= row && row < 8 && 0 <= col && col < 8 
  }
  let queue = [[init,[init]]]
  let directions = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [-1, 2],
    [1, 2]
  ]
  let seen = new Array(8)
  for (let i = 0; i < 8; i++) {
    seen[i] = new Array(8).fill(false)
  }
  seen[init[0],init[1]] = true

  while(queue.length) {
    let nextQueue = []

    for (const [[row, col], path] of queue) {
      if (row == end[0] && col == end[1]) {
        return path
      }

      for (const [dirRow, dirCol] of directions) {
        let nextRow = row + dirRow
        let nextCol = col + dirCol
        if (valid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
          seen[nextRow][nextCol] = true
          let nextPath = path.concat([[nextRow, nextCol]])
          nextQueue.push([[nextRow, nextCol], nextPath])
        }
      }

      queue = nextQueue
    }
  }
}

console.log(knightMoves([3,3],[4,3]))
