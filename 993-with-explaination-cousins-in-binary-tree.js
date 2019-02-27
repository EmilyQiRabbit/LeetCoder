/**
 * @Topic Tree - Easy
 * @Question In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
 *           Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
 *           We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
 *           Return true if and only if the nodes corresponding to the values x and y are cousins.
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const find_node = (x, y, node, parentNode, depth, result) => {
  if (!node) {
      return
  }
  if (node.val === x) {
      result.x_node = {
          depth, parentNode
      }
  }else if (node.val === y) {
      result.y_node = {
          depth, parentNode
      }
  }
  // 都找到了就不用继续找了
  if (!result.x_node || !result.y_node) {
      find_node(x, y, node.left, node, depth + 1, result)
      find_node(x, y, node.right, node, depth + 1, result)
  }
}

// main
var isCousins = function(root, x, y) {
  const res = {}
  find_node(x, y, root, null, 0, res)
  const { x_node, y_node } = res
  if (x_node.depth === y_node.depth && x_node.parentNode !== y_node.parentNode) {
      return true
  }
  return false
};
