/**
 * @Topic Array - Easy
 * 
 * @Question 
 * Given an array A of strings made only from lowercase letters,
 * return a list of all characters that show up in all strings within the list (including duplicates).
 * For example, if a character occurs 3 times in all strings but not 4 times, 
 * you need to include that character three times in the final answer.
 * You may return the answer in any order.
 * 
 * @Solution 
 * 1. 遍历，然后取最小值，就是取到了交集
 * 
 */

 // 如下为题目解答：
 /**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let sum = new Array(26).fill(10000000), result = []
  A.forEach((a) => {
      const len_a = a.length
      const array = new Array(26).fill(0)
      for (let i=0 ; i<len_a ; i++) {
          const index = a.charCodeAt(i) - 97
          array[index] += 1
      }
      sum = sum.map((num, i) => {
          return Math.min(num, array[i])
      })
  })
  sum.forEach((num, index) => {
      if (num) {
          const a = new Array(num).fill(String.fromCharCode(index + 97))
          result = result.concat(a)
      }
  })
  return result
};