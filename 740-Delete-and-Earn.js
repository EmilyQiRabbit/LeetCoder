// 题目链接：https://leetcode.com/problems/delete-and-earn/discuss/109889/Java-Easy-DP-Solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const divideArray = new Array(10001).fill(0)
  let maxNum = 0
  nums.forEach(function(num){
      divideArray[num] += num // 数字分组，这可能是一个稀疏矩阵
      if (num > maxNum) {
          maxNum = num
      }
  })
  const dp = [divideArray[0], Math.max(divideArray[0], divideArray[1])]
  for(let i=2; i<=maxNum; i++) {
      dp[i] = Math.max(dp[i-2] + divideArray[i], dp[i-1])
  }
  return dp[maxNum]
};