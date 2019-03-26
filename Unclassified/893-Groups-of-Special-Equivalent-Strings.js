// 原题地址: https://leetcode.com/problems/groups-of-special-equivalent-strings/description/

/**
 * @param {string[]} A
 * @return {number}
 */

/**
 * 解题的关键在于，如何对比两个字符串是 special-equivalent 的？
 * 直接提取奇数偶数位然后对比是不明智的 >.<
 * 换一个思路：
 * 其实就是奇数/偶数位统计的字母的个数相同即可。
 */
var numSpecialEquivGroups = function(A) {
  const seen = new Set()
  A.forEach(function(str){
      const count = new Array(52).fill(0)
      const len = str.length
      for(let i=0; i<len; ++i) {
          count[str.charCodeAt(i) - 97 + 26 * (i % 2)] ++
      }
      seen.add(count.toString())
  })
  return seen.size
};