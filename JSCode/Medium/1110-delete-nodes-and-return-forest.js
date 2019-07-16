/**
 * @Topic DFS - Medium
 * 
 * @Question 
 * Given the root of a binary tree, 
 * each node in the tree has a distinct value.
 * After deleting all nodes with a value in to_delete, 
 * we are left with a forest (a disjoint union of trees).
 * Return the roots of the trees in the remaining forest. 
 * You may return the result in any order.
 * 
 */

// 解答：

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  // 使用 Map 数据结构，将树中节点作为 key
  const res = new Map([[root, 1]])
  dfs(root, to_delete, res)
  return [...res.keys()];
};

const dfs = (node, to_delete, res, parent, type) => {
  const { left, right, val } = node
  const index = to_delete.indexOf(val)
  if (index > -1) { // 这个节点是需要删除的节点
      // 这个节点删除后，将它的左子树和又子树都放在 res 中
      left && res.set(left, 1)
      right && res.set(right, 1)
      // 然后将这个节点从结果中移除（因为它之前可能作为子树被添加到了 res 中
      res.delete(node)
      // 然后将它的父级元素对应的子树设置为 null
      if (type == 'left') {
          parent.left = null
      } else if (type == 'right') {
          parent.right = null
      }
  }
  // 继续搜索
  left && dfs(left, to_delete, res, node, 'left')
  right && dfs(right, to_delete, res, node, 'right')
}
