/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/**
 * 解法很良心～
 * 只做了一遍数组的轮询，利用一个 map 和求差的思想，完成解题。
 * 典型的空间换时间！
 * 棒了个棒～
 */

var checkSubarraySum = function(nums, k) {
  let map = {}
  let sum = 0, len = nums.length;
  map[0] = -1
  for(let i=0;i<len;i++){
    sum += nums[i]
    if(k !== 0){
      sum %= k
    }
    let prev = map[sum] // 如果有两个位置除以 k 以后余数相同，那么表示这两个位置中间的和应该正好是 k 的倍数
    if (prev != undefined) {
      if(i - prev > 1){
        return true
      }
    }else{
      map[sum] = i
    }
  }
  return false
};