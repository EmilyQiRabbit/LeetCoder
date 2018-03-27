/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) { // 动态规划，嗷了个喵
  // 所以两个要点，第一数组，第二想好每一位表示的意义。
  let lenA = A.length, lenB = B.length, max = 0;
  let dp = new Array(lenA + 1).fill(0) // 必须 fill，否则数组内没有元素，map 方法也就不会执行
  dp = dp.map(function(){
    return new Array(lenB + 1).fill(0)
  });
  for (let j=1; j<=lenB; j++){
    for (let i=1; i<=lenA; i++){
      if(A[i - 1] == B[j - 1]){
        dp[i][j] = 1 + dp[i - 1][j - 1]; // 对角线啊摔！
        max = Math.max(max,dp[i][j]);
      }
    }
  }
  return max
};