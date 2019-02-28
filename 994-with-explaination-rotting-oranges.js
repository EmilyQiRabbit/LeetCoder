/**
 * @Topic Breadth-first Search - Easy
 * @Question In a given grid, each cell can have one of three values:
 *           the value 0 representing an empty cell;
 *           the value 1 representing a fresh orange;
 *           the value 2 representing a rotten orange.
 *           Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
 *           Return the minimum number of minutes that must elapse until no cell has a fresh orange.  
 *           If this is impossible, return -1 instead.
 * @Solution 1. 这道题的关键思路是广度优先搜索
 *           2. 如果是一棵树，那么广度优先搜索就很简单了，递归即可嘛
 *           3. 但是，这是一个数组，要怎么办呢？
 *           4. 既然是广度优先搜索，那么就要先锁定：从哪些地方开始搜索？也就是「怀橘子在哪里」？这就是第一轮嵌套循环的意义
 *           5. 第二轮嵌套循环就是数组的广度优先搜索。
 *           6. 我们可以把最初的坏橘子看作第一级节点，第一轮循环就遍历这第一轮节点，然后把被传染的橘子作为第二层节点也放到数组里。
 *           7. 下一轮循环就遍历这第二层节点。依次类推。
 */

// 如下为题目解答：
/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
  const row = grid.length
  const col = grid[0].length
  let step = -1, fresh = 0
  let rotten_location = []
  for (let i=0; i<row; i++) {
      const row_arr = grid[i]
      for (let j=0; j<col; j++) {
          if (row_arr[j] === 2) {
              rotten_location.push([i, j])
          } else if (row_arr[j] === 1) {
              fresh++
          }
      }
  }
  if (!fresh) {
      return 0
  }
  const directions = [[1,0], [-1,0], [0,1], [0,-1]]
  while (rotten_location.length) {
      step += 1;
      // console.log(rotten_location, step)
      const length = rotten_location.length
      for (let i=0; i<length; i++) {
          const rotten = rotten_location.shift()
          directions.forEach((direction) => {
              const x = rotten[0] + direction[0], y = rotten[1] + direction[1]
              if (x < 0 || y < 0 || x > row-1 || y > col-1 || grid[x][y] % 2 === 0) {
                  return
              }
              grid[x][y] = 2
              rotten_location.push([x, y])
              fresh--
          })
      }
  }
  return fresh ? -1 : step
};
