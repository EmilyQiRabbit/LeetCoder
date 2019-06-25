/**
 * @Topic Array - Medium
 * 
 * @Question 
 * Given an array A of integers, 
 * return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.
 * 
 * Example 1:
 * Input: A = [4,5,0,-2,-3,1], K = 5
 * Output: 7
 * Explanation: There are 7 subarrays with a sum divisible by K = 5:
 * [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
 * 
 * 
 * @Solution
 * 1. 如果 sum(A.slice(0, i)) 能整除 K，sum(A.slice(0, j)) 能整除 K，那么 sum(A.slice(i+i, j)) 肯定也能整除 K
 * 2. 根据第一条，可以推广一下，如果 sum(A.slice(0, i)) % K === sum(A.slice(0, j)) % K，那么 sum(A.slice(i+i, j)) 肯定能整除 K
 * 3. 所以我们就要寻找，所有 sum(A.slice(0, i)) % K 相等的数组对，这样的两个数组取不相交的部分，就是可以整除 K 的数组
 * 4. 记录下 sum(A.slice(0, i)) % K 相等的数组对个数很简单，用 map/array 记录都可以
 * 5. 但是如果我们找到了 sum(A.slice(0, i)) % K === 0 的时候，这个数组本身就已经是一个符合条件的结果了，所以一开始就设定：array[0] = 1;
 * 
 */

// 如下为题目解答：
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  const array = new Array(10000).fill(0) // 题目告知：-10000 <= A[i] <= 10000
  let count = 0, sum = 0;
  array[0] = 1;
  A.forEach((a) => {
      sum = (sum + a) % K
      if (sum < 0) { 
          // 例如：如果 K = 5, sum % K === -1，那么其实我们要找的是某个 sum % K === 4
          // 这样相减之后才能整除 K
          sum += K
      }
      count += array[sum]
      array[sum] += 1
  })
  return count
};

// 使用 hash 的解法如下

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
  const hash = {0: 1}
  let result = 0, sum = 0
  A.forEach((a) => {
      sum += a
      let remainder = sum % K
      if (remainder < 0) {
          remainder += K
      }
      result += hash[remainder] || 0
      // 记录
      if(!hash[remainder]){
          hash[remainder] = 1
      } else {
          hash[remainder]++
      }
  })
  return result
};
