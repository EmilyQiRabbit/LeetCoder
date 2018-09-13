/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(A) {
  const n = A.length;
  const dp = []; // dp[i] means the maximum subarray ending with A[i];
  dp[0] = A[0];
  let max = dp[0];

  for(let i = 1; i < n; i++){
      dp[i] = A[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
      max = Math.max(max, dp[i]);
  }

  return max;
};

// 题目链接：https://leetcode.com/problems/maximum-subarray/description/