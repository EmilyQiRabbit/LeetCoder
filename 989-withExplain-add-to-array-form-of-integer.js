/**
 * @Topic Array
 * @Question For a non-negative integer X, 
 *           the array-form of X is an array of its digits in left to right order. 
 *           For example, if X = 1231, then the array form is [1,2,3,1].
 *           Given the array-form A of a non-negative integer X, 
 *           return the array-form of the integer X+K.
 * @Solution 1. js 能够记录最大的数字是 2^53 -1，因此，不能简单的将数组转化为数字。
 *           2. 采用数组逐位相加，要考虑 A 的长度和 K 的位数谁大的问题
 *           3. 如下的解法很巧妙的解决了进位的问题。
 *              如果有进位，A[i] + K 这一步就会自动进位，而 Math.floor(tmp / 10) 保留了进位结果
 */

// 如下为题目解答：
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  // 这个方法不行，因为 js 无法记录那么大的数字
  // const lenA = A.length
  // let sum = 0
  // A.forEach(function(num, index){
  //     sum += Math.pow(10, lenA - index - 1) * num
  // })
  // const result = sum + K
  // return (''+result).split('')
  
  // 所以其实还是要用数组来做
  const result = []
  const lenA = A.length
  for (let i = lenA - 1; i > -1 || K > 0; --i) {
      const tmp = i > -1 ? A[i] + K : K
      result.unshift(tmp % 10)
      K = Math.floor(tmp / 10)
  }
  return result
};