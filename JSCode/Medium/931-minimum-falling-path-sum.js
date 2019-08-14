/**
 * @Topic DP - Medium
 * 
 * @Question 
 * Given a square array of integers A, 
 * we want the minimum sum of a falling path through A.
 * 
 * A falling path starts at any element in the first row, 
 * and chooses one element from each row.  
 * The next row's choice must be in a column 
 * that is different from the previous row's column by at most one.
 * 
 * @Solution
 * 动态规划，这次轻松完成了✌️
 * 
 */

// 如下为题目解答：

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
  const length = A.length
  const dp = new Array(length)
  dp[0] = A[0]
  for (let i=1; i<length; i++) {
      const arrayCur = A[i]
      const arrayPre = dp[i-1]
      dp[i] = arrayPre.map((num, index) => {
          const leftIndex = Math.max(0, index-1)
          const rightIndex = Math.min(length-1, index+1)
          return arrayCur[index] + Math.min(arrayPre[index], arrayPre[leftIndex], arrayPre[rightIndex])
      })
  }
  let min = Infinity
  const result = dp[length-1]
  result.forEach((num) => {
      min = Math.min(num, min)
  })
  return min
};
