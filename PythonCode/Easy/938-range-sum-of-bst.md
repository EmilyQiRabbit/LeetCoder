# 938. Range Sum of BST

## 原题

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

## 解答 1

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def rangeSumBST(self, root, L, R):
        """
        :type root: TreeNode
        :type L: int
        :type R: int
        :rtype: int
        """
        res = []
        def helper(node):
            if node:
                value = node.val
                if L<= value <= R:
                    res.append(value)
                helper(node.left)
                helper(node.right)
        helper(root)
        return sum(res)
```

## 解答 2

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object): 
    def rangeSumBST(self, root, L, R):
        if not root: return 0
        l = self.rangeSumBST(root.left, L, R)
        r = self.rangeSumBST(root.right, L, R)
        return l + r + (L <= root.val <= R) * root.val
```