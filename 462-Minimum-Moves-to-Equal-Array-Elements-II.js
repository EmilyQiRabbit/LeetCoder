/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 想了半天结果答案这么白痴 =。=
 * 
 */
var minMoves2 = function(nums) {
  nums.sort(function(a, b){ // JS 的数组排序好奇葩，每次总要这样 >.<
    return a - b
  })
  let i = 0, j = nums.length-1; // 双指针
  let count = 0;
  while(i < j){
    count += nums[j]-nums[i]; // 不懂的话，就画一下数轴。
    i++;
    j--;
  }
  return count;
};