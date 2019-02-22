/**
 * @Topic two pointers
 * @Question Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.
 *           Return the intersection of these two interval lists.
 *           (Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.
 *           The intersection of two closed intervals is a set of real numbers that is either empty,
 *           or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)
 * @Solution 1. 需要考虑两个对象有否重叠部分，以及移动哪个指针，两个问题
 * 
 */

// 如下为题目解答：
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function(A, B) {
  let a = 0, b = 0;
  const result = [], len_a = A.length, len_b = B.length;
  while(a < len_a && b < len_b) {
      if (A[a].start > B[b].end) {
          b++
      } else if (B[b].start > A[a].end) {
          a++
      } else {
          result.push({
              start: Math.max(A[a].start, B[b].start),
              end: Math.min(A[a].end, B[b].end)
          })
          if (A[a].end < B[b].end){
              a++
          } else {
              b++
          }
      }
  }
  return result
};