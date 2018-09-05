/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) { // m0 n1
  let dp = [];
  initArray(dp)
  strs.forEach(function(str){
    let array = count01(str);
    for (let i=m; i>=array[0]; i--){
      for (let j=n; j>=array[1]; j--){
        dp[i][j] = Math.max(1 + dp[i-array[0]][j-array[1]], dp[i][j]);
      }
    }
  })
  return dp[m][n];
  
  function count01(str){
    let len = str.length;
    let array = [0, 0]
    for(let i=0; i<len; i++){
      array[str.charAt(i) - '0']++
    }
    return array;
  }
  function initArray(dp){ // js 新建数组默认不是零啊要自己初始化的 >.<
    let dp1 = []
    for(let i=0; i<n+1; i++){ // 横坐标（列数目）为 1 数目
      dp1.push(0)
    }
    for(i=0; i<m+1; i++){ // 纵坐标（行数目）为 0 数目
      let tmp = dp1.slice(0) // 不能直接就 dp.push(dp1)！卧槽一开始写错了简直坑啊！...现在终于跳出了坑，可是代码都还没看懂呢.....
      dp.push(tmp)
    }
  }
};