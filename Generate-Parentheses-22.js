/**
 * @param {number} n
 * @return {string[]}
 */
// backtrack，回溯思想
/** 
 * 回溯法（探索与回溯法）是一种选优搜索法，又称为【试探法】，按选优条件向前搜索，以达到目标。 
 * 但当探索到某一步时，发现原先选择并不优或达不到目标，就退回一步重新选择，
 * 这种走不通就退回再走的技术为回溯法，而满足回溯条件的某个状态的点称为“回溯点”。
 */
var generateParenthesis = function(n) {
  let array = []
  backtrack('', 0, 0, n)
  return array;
  
  function backtrack(str, open, close, n){
    if(str.length === n*2){
      array.push(str)
      return
    }
    if(open < n){ // 试探
      backtrack(str + '(', open+1, close, n)
    }
    if(close < open){ // 上一个试探直到走不通，就会回到这里继续
      backtrack(str + ')', open, close+1, n)
    }
  }
};