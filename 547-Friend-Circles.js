/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) { // 这一定是一个对称矩阵！
  let d = M.length;
  let fcArray = [];
  let searched = {}
  for (let i=0; i<d; i++){ // Just 遍历半个矩阵
    for(let j=i+1; j<d; j++) {
      if (M[i][j] && !searched[j]) { // i j 认识
        searched[j] = 1;
        let set = new Set()
        for(let s in fcArray){
          if(fcArray[s].has(i) || fcArray[s].has(j)){
            set = fcArray[s]
            break
          }
        }
        getFC(set, j)
        fcArray.push(set)
      }
    }
  }
  let add = d - Object.keys(searched).length
  return fcArray.length + add
  
  function getFC(set, m){ // m 为搜索行 -> 深度优先搜索
    searched[m] = 1;
    M[m].forEach(function(item, index){ // index 为列
      if (item) {
        set.add(item);
        if (!searched[index]){
          getFC(set, index)
        }
      }
    })
  }
};
// 然而这个算法效率并不高，请参见下面这段 java [皱眉]
// 可以说相当 Nice 了
// public class Solution {
//   public void dfs(int[][] M, int[] visited, int i) {
//       for (int j = 0; j < M.length; j++) {
//           if (M[i][j] == 1 && visited[j] == 0) {
//               visited[j] = 1;
//               dfs(M, visited, j);
//           }
//       }
//   }
//   public int findCircleNum(int[][] M) {
//       int[] visited = new int[M.length];
//       int count = 0;
//       for (int i = 0; i < M.length; i++) {
//           if (visited[i] == 0) {
//               dfs(M, visited, i);
//               count++;
//           }
//       }
//       return count;
//   }
// }