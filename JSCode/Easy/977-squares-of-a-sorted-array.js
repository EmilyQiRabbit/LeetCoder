/**
 * @Topic two pointers - Easy
 * @Question Given an array of integers A sorted in non-decreasing order,
 *           return an array of the squares of each number, 
 *           also in sorted non-decreasing order.
 * @Solution 1. 其实就是：使用双指针的排序问题
 * 
 */

// 如下为题目解答：
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const result1 = [], result2 = []
  let result = []
  A.forEach((num) => {
      if (num < 0) {
          result1.unshift(num * num)
      } else {
          result2.push(num * num)
      }
  })
  const len1 = result1.length, len2 = result2.length
  let i = 0, j = 0
  while (i < len1 && j < len2) {
      if (result1[i] < result2[j]) {
          result.push(result1[i])
          i++
      } else if (result1[i] > result2[j]) {
          result.push(result2[j])
          j++
      } else {
          result.push(result1[i], result2[j])
          i++
          j++
      }
  }
  if (i < len1) {
      result = result.concat(result1.slice(i))
  }
  if (j < len2) {
       result = result.concat(result2.slice(j))
  }
  return result
};
