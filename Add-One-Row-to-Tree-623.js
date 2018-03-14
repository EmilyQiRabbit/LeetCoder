/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d === 1) {
    let newRoot = new TreeNode(v)
    newRoot.left = root;
    return newRoot
  }
  addNode(1, root);
  return root
    
  function addNode(level, node) { // 递归，easy to understand～
    if (node) {
      if (level === d - 1) {
        let left = node.left, right = node.right;
        node.left = new TreeNode(v);
        node.right = new TreeNode(v);
        node.left.left = left;
        node.right.right = right;
      } else {
        addNode(level + 1, node.left)
        addNode(level + 1, node.right)
      }
    }
  }
};