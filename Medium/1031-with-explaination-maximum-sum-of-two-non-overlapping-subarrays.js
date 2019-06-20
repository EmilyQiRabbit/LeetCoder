/**
 * @Topic Array - Medium
 * 
 * @Question 
 * Given an array A of non-negative integers, 
 * return the maximum sum of elements in two non-overlapping (contiguous) subarrays, 
 * which have lengths L and M.  
 * (For clarification, 
 * the L-length subarray could occur before or after the M-length subarray.)
 * 
 */

// 第一遍自己写的暴力搜索：
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  const LArrayData = sumHelper(A, L)
  const MArrayData = sumHelper(A, M)
  // console.log(MArrayData, LArrayData)
  let result = 0
  MArrayData.forEach((MItem) => {
      LArrayData.forEach((LItem) => {
          if (!isOverlap(MItem.start, M, LItem.start, L)) {
              result = Math.max(MItem.sum + LItem.sum, result)
          }
      })
  })
  return result
};

// 利用滑动窗口类似的想法，计算长度为 length 的子数组的所有可能值
var sumHelper = (array, length) => {
  const data = []
  const tmp = {
      sum: 0,
      start: 0
  }
  for (let i=0; i<length; i++) {
      tmp.sum += array[i] 
  }
  data.push(tmp)
  for (let i=0; i<array.length - length; i++) {
      const lastpush = data[data.length - 1]
      data.push({
          sum: lastpush.sum - array[i] + array[i + length],
          start: lastpush.start + 1
      })
  }
  return data
}
// 判断两个数组是否有重合
var isOverlap = (start1, L1, start2, L2) => {
  if (start1 > start2) {
      return start2 + L2 > start1
  } else if (start1 < start2) {
      return start1 + L1 > start2
  } else {
      return true
  }
}

// 优化方案：
// 首先，计算子数组和的方法，采用滑动窗口其实如使用一个 prefixSum 数组，得到这个数组的方式是：
const prefixSum = []
prefixSum[0] = A[0];
for (let i = 1; i < A.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + A[i];
}
// 其次是寻找最大可能组合的方法，旧的方法其实就是暴力遍历，并且计算每一对组合可能的值。这样其实非常不上算的。
// 最高效的方式：
var split_and_find_max_sum = (A, prefixSum, L, M) => {
  const length = A.length
  const leftMax = new Array(length), rightMax = new Array(length);
  for (let i = L-1; i<length; i++) {
      const tmpSum = prefixSum[i] - prefixSum[i - L + 1] + A[i - L + 1];
      if (i === L - 1) {
          leftMax[i] = tmpSum;
      } else {
          leftMax[i] = Math.max(leftMax[i - 1], tmpSum);
      }
  }
  
  for (let i = length - M; i >= 0; i--) {
      const tmpSum = prefixSum[i + M - 1] - prefixSum[i] + A[i];
      if (i === length - M) {
        rightMax[i] = tmpSum;
      } else {
        rightMax[i] = Math.max(rightMax[i + 1], tmpSum);
      }
  }
  
  let sum = -Infinity
  for (let i = L - 1; i < length - M; i++) {
    sum = Math.max(sum, leftMax[i] + rightMax[i + 1]);
  }
  return sum
}

// 所以最后代码就变成：
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  const prefixSum = [], length = A.length
  prefixSum[0] = A[0]
  for (let i=1; i<length; i++) {
    prefixSum[i] = prefixSum[i-1] + A[i]
  }
  if (L + M === length){
    return prefixSum[length - 1];
  }
  return Math.max(split_and_find_max_sum(A, prefixSum, L, M), 
                  split_and_find_max_sum(A, prefixSum, M, L));
};


var split_and_find_max_sum = (A, prefixSum, L, M) => {
  const length = A.length
  const leftMax = new Array(length), rightMax = new Array(length);
  for (let i = L-1; i<length; i++) {
    const tmpSum = prefixSum[i] - prefixSum[i - L + 1] + A[i - L + 1];
    if (i === L - 1) {
      leftMax[i] = tmpSum;
    } else {
      leftMax[i] = Math.max(leftMax[i - 1], tmpSum);
    }
  }
  
  for (let i = length - M; i >= 0; i--) {
    const tmpSum = prefixSum[i + M - 1] - prefixSum[i] + A[i];
    if (i === length - M) {
      rightMax[i] = tmpSum;
    } else {
      rightMax[i] = Math.max(rightMax[i + 1], tmpSum);
    }
  }
  
  let sum = -Infinity
  for (let i = L - 1; i < length - M; i++) {
    sum = Math.max(sum, leftMax[i] + rightMax[i + 1]);
  }
  return sum
}
