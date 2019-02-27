/**
 * @Topic Greedy - Easy
 * @Question Given two integers A and B, return any string S such that:
             1. S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
             2. The substring 'aaa' does not occur in S;
             3. The substring 'bbb' does not occur in S.
 * @Solution 1. 贪心算法：
 *           2. 是「在每一步选择中都采取在当前状态下最优的选择，从而希望导致结果是最好或最优」的算法。
 */

// 如下为题目解答：

/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  let Letter1 = 'a', Letter2 = 'b', l1 = A, l2 = B, result = ''
  if (A < B) {
      Letter1 = 'b'
      Letter2 = 'a'
      l1 = B
      l2 = A
  }
  while (l1-- > 0) {
      result += Letter1
      if (l1 > l2) {
          result += Letter1
          l1--
      }
      if (l2-- > 0) {
          result += Letter2
      }
  }
  return result
};
