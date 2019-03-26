/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let len = temperatures.length;
  // Normal method, but not very efficient.
  // let marginArray = new Array(len).fill(0);
  // for(let i=0;i<len;i++){
  //   for(let j=i+1;j<len;j++){ // j > i
  //     if(temperatures[j] > temperatures[i]){
  //       marginArray[i] = j - i
  //       break
  //     }
  //   }
  // }
  // return marginArray
  
  // Try another way, use stack.
  let stack = new Array(); // 栈里保存的是 INDEX 信息
  let ret = new Array(len).fill(0);
  let top = -1;
  for(let i = 0; i < len; i++) {
    while(top > -1 && temperatures[i] > temperatures[stack[top]]) { // 把待处理的数据放到栈内
      let idx = stack[top--];
      ret[idx] = i - idx;
    }
    stack[++top] = i;
  }
  return ret;
};