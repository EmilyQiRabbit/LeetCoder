# Delete Nodes And Return Forest

## 原题目

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  You may return the result in any order.

Example 1:

```
Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
```

## 解答

这道题目需要使用 dfs（深度优先搜索）算法。一开始自己写的 js 代码是：

```js
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
    const res = new Map([[root, 1]])
    dfs(root, to_delete, res)
    return [...res.keys()];
};

const dfs = (node, to_delete, res, parent, type) => {
    const { left, right, val } = node
    const index = to_delete.indexOf(val)
    if (index > -1) {
        left && res.set(left, 1)
        right && res.set(right, 1)
        res.delete(node)
        if (type == 'left') {
            parent.left = null
        } else if (type == 'right') {
            parent.right = null
        }
    }
    left && dfs(left, to_delete, res, node, 'left')
    right && dfs(right, to_delete, res, node, 'right')
}
```

我使用了 es6 的 Map 数据结构，将需要保存在 forest 的节点作为 Map 的 key 保存起来，然后当这个节点的 val 和 to_delete 的元素相等时，再将这个节点从 map 中 delete 掉。

但其实这个先 res.set 然后 res.delete 的操作显得冗余，同时需要做判断并设置 prarent.left 和 parent.right，这样也不太完美。应该有办法可以更加简洁的实现。

**参考了[大神的代码](https://leetcode.com/problems/delete-nodes-and-return-forest/discuss/328853/JavaPython-Recursion-Solution)：**

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def delNodes(self, root, to_delete):
        to_delete_set = set(to_delete)
        res = []

        def helper(root, is_root):
            if not root: return None
            root_deleted = root.val in to_delete_set
            # 根据条件判断是否加入，而非先加后删
            if is_root and not root_deleted:
                res.append(root)
            # 如果这个节点被删了，那么它的子节点就是 forest 中的 root 了，合理！
            root.left = helper(root.left, root_deleted)
            root.right = helper(root.right, root_deleted)
            return None if root_deleted else root

        helper(root, True)
        return res
```

By the way，作为一个 JavaScript 写手，初看 python 觉得好有趣～😆
