/**
 * @Topic Tree - Medium
 * 
 * @Question 
 * Return the root node of a binary search tree that matches the given preorder traversal.
 * 
 * (Recall that a binary search tree is a binary tree where for every node, 
 * any descendant of node.left has a value < node.val,
 * and any descendant of node.right has a value > node.val.
 * Also recall that a preorder traversal displays the value of the node first,
 * then traverses node.left, then traverses node.right.)
 * 
 * @Solution 
 * 1. 树结构的反演：一般都是给出树，让以某种规则得出遍历的数组
 * 2. 不管是正演还是反演，其实都可以用两种方法：stack 或者递归
 * 3. 递归的思路比较容易想，但其实就是让代码在后台来帮助我们建立了 stack
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  let i = 0
  let bst = function(A, bound) {
    // 边界条件
    if (i == A.length || A[i] > bound) return null;
    const root = new TreeNode(A[i++]);
    root.left = bst(A, root.val);
    root.right = bst(A, bound);
    return root
  }
  return bst(preorder, Infinity)
};
