# 538. Convert BST to Greater Tree

## 原题

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

## 解答

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def convertBST(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """

        def recursion(node):
            if not node:
                return 0
            recursion(node.right)
            node.val += self.sum_of_greater
            self.sum_of_greater = node.val
            recursion(node.left)

        self.sum_of_greater = 0
        recursion(root)
        return root
```

解题的关键在于对 BST 的理解：对于树中任意一个节点，它的左子树上的值都小于这个节点，右子树上的值都大于这个节点。

这道题，其实就是要找到：所有大于某个节点的值的总和。然而其实 BST 本身就是一个排序好了的结构。

如果想将树中所有节点倒序排列：

```python
class Solution(object):
    def sortBST(self, root):

        def recursion(node):
            if not node:
                return 0
            recursion(node.right)
            self.sortArray.append(node.val)
            recursion(node.left)

        self.sortArray = []
        recursion(root)
        print(self.sortArray)
        return root
```

因此，想要得到「所有大于某个节点的值的总和」其实也很简单。
