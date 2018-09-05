/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) { // 有序的数组！
  nums.sort(function(a, b){ // 首先对数组排序，这样在后面确定符合条件的边长范围会很简单
    return a>b ? 1 : -1
  })
  let count = 0, n = nums.length;
  for (let i=n-1; i>=2; i--) {
    let l = 0, r = i-1;
    while (l < r) {
      if (nums[l] + nums[r] > nums[i]) { // 符合三角形三边规则，两边之和大于第三边
        count += r-l; // 这之间的全都符合！
        r--;
      }
      else l++;
    }
  }
  return count;
};