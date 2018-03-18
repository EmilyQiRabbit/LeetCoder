/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort(function(a, b){
    return a[0] > b[0] ? 1 : -1 // 大前提是，数组已经有序
  })
  // let len = pairs.length // DP 解法
  // let dp = new Array(len);
  // for (let i = 0; i < dp.length; i++) {
  //   dp[i] = 1;
  //   for (let j = 0; j < i; j++) {
  //     dp[i] = Math.max(dp[i], pairs[i][0] > pairs[j][1]? dp[j] + 1 : dp[j]); // 双层轮询
  //   }
  // }
  // return dp[pairs.length - 1]
  let len = 0; // 非 DP 解法，其实更高效！（下面的判断的基础都是**数组有序**）
  let pre = -Infinity;
  for(let key in pairs){
    pair = pairs[key]
    if(pair[0] > pre){  // not overlap
      len++;
      pre = pair[1];
    }else if(pair[1] < pre){ // overlap but with smaller second element
      pre = pair[1];
    }
  }
  return len
};