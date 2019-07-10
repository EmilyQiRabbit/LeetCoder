/**
 * @Topic Hash Table - Easy
 * 
 * @Question 
 * We are given two sentences A and B.  
 * (A sentence is a string of space separated words.  
 * Each word consists only of lowercase letters.)
 * A word is uncommon if it appears exactly once in one of the sentences, 
 * and does not appear in the other sentence.
 * Return a list of all uncommon words. 
 * You may return the list in any order.
 * 
 * @Solution
 * 比较简单，用一个 map 就解决了
 * 
 */

// 如下为题目解答：
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  const map = {};
  (A +' ' + B).split(' ').forEach((a) => {
      map[a] = (map[a] || 0) + 1
  })
  const res = []
  for (var key in map) {
    map[key] < 2 && res.push(key)
  }
  return res
};
