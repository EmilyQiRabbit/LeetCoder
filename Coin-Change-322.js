/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) { // DP! 动态规划！又是动态规划。
  let dp = [0];
  for(let i = 1; i<=amount; i++){
    dp[i] = Infinity;
    coins.forEach(function(coin){
      if(i>=coin){
        dp[i] = Math.min(dp[i - coin] + 1, dp[i])
      }
    })
  }
  return dp[amount] >= 0 && dp[amount] < Infinity ? dp[amount] : -1
};