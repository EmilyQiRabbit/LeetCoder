/**
 * @Topic Tree, DFS - Medium
 * 
 * @Question 
 * Given the root of a binary tree, 
 * find the maximum value V for which there exists different nodes A and B 
 * where V = |A.val - B.val| and A is an ancestor of B.
 * (A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.)
 * 
 * @Solution
 * 这道题目相对容易，使用深度优先搜索即可
 * 
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
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  return DFS(root, -Infinity, Infinity)
};

const DFS = (node, max, min) => {
  if (node) {
      max = Math.max(node.val, max)
      min = Math.min(node.val, min)
      return Math.max(DFS(node.left, max, min), DFS(node.right, max, min))
  } else {
      return Math.abs(max-min)
  }
}
