/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) { // 拆解复杂的问题 -> 递归
  let retArray = [];
  for(let i=0; i<input.length; i++){
    if (input.charAt(i) === '-' || input.charAt(i) === '*' || input.charAt(i) === '+' ) { // 包含标点，进入递归
      let part1 = input.substring(0, i)
      let part2 = input.substring(i+1)
      let part1Result = diffWaysToCompute(part1)
      let part2Result = diffWaysToCompute(part2)
      part1Result.forEach(function(item1){
        part2Result.forEach(function(item2){
          let c = 0;
          switch (input.charAt(i)) { // 判断当前运算符号
            case '+': c = item1+item2;
              break;
            case '-': c = item1-item2;
              break;
            case '*': c = item1*item2;
              break;
          }
          retArray.push(c);
        })
      })
    }
  }
  if (retArray.length === 0) { // 结束递归
    retArray.push(parseInt(input));
  }
  return retArray;
};