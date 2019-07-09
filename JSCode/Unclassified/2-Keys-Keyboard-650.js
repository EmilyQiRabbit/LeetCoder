/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) { 
  // 又是动态规划啊?! 诶我做还不行~
  // let dp = [0, 0, 2, 3];
  // for(let i=4; i<n + 1; i++){
  //   for(let j=1; j<i/2 + 1; j++){
  //     if(i%j === 0){
  //       dp[i] = dp[j] + i/j || i;
  //     }
  //   }
  // }
  // return dp[n]
  // 代码效率并不高，烦躁.....
  
  // Without DP! 这个方法其实更高效啊！
  let res = 0;
  for(let i=2; i<=n; i++){ // 原理就是，用越大的长度进行复制粘贴，步骤肯定更少。于是去直接分解 n，就不用 dp 那样迭代了。
    while(n%i == 0){
      res += i;
      n = n/i;
    }
  }
  return res;
};