/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) { // 又尼玛动态规划？！@-@
  // .....不会做，看答案，求提示.....
  // 嗯，首先，需要用二维数组；
  // 其次，需要 Math.min。
  // 好难啊～还是想不出 >.<
  // 思路是，对于每个字母，只有删除或者不删除两种可能，如果删了，那么总数就要加上对应的 ascii 码。
  let m = s1.length, n = s2.length;
  let dp = new Array(m+1).fill(0)
  dp = dp.map(function(item){
    return new Array(n+1).fill(0)
  })
  for (let j = 1; j <= n; j++){
    // 关键点：从 0 循环 -> 相当于考虑一个字符串为空的情况，所以一定会需要加上一个数
    dp[0][j] = dp[0][j-1] + s2.charCodeAt(j-1);
  }
  for (let i = 1; i <= m; i++) {
    // 同理
    dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1);
    for (let j = 1; j <= n; j++) {
      if (s1.charAt(i-1) === s2.charAt(j-1)){ // 如果一样，不做改变
        dp[i][j] = dp[i-1][j-1];
      } else {
        dp[i][j] = Math.min(dp[i-1][j]+s1.charCodeAt(i-1), dp[i][j-1]+s2.charCodeAt(j-1));
      }
    }
  }
  return dp[m][n];
};