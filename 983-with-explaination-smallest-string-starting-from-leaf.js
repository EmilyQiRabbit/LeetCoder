/**
 * @Topic Tree
 * @Question Given the root of a binary tree, each node has a value from 0 to 25 representing the letters 'a' to 'z':
 *           a value of 0 represents 'a', a value of 1 represents 'b', and so on.
 *           Find the lexicographically smallest string that starts at a leaf of this tree and ends at the root.
 * @Solution 1. 详见代码注释
 *           2. 注意： 'a' < 'z' (true)
 */

// 如下为题目解答：
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
// 是否是叶子？
const is_leaf = function (node) {
  return node.left === node.right
}
// 数字换字母
const num_2_letter = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// main
var smallestFromLeaf = function(root) {
  var result = null
  // 递归搜索函数
  const find_leaf_string = function (node, string) {
      if (is_leaf(node)) {
          const leaf_str = num_2_letter[node.val] + string
          result = result ? (leaf_str < result ? leaf_str : result) : leaf_str
      }
      node.left && find_leaf_string(node.left, num_2_letter[node.val] + string)
      node.right && find_leaf_string(node.right, num_2_letter[node.val] + string)
  }
  // start
  if (root === null) {
      return ''
  }
  find_leaf_string(root, '')
  return result
};