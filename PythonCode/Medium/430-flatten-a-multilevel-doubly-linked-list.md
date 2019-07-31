# 430. Flatten a Multilevel Doubly Linked List

## 原题

You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Example:

```
Input:
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL

Output:
1-2-3-7-8-11-12-9-10-4-5-6-NULL
```

## 解答

还是先看代码：

```python
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
"""
class Solution(object):
    def flatten(self, head):
        """
        :type head: Node
        :rtype: Node
        """
        def dfs(node):
            if node:
                # 建立两个 node 之间的连接
                if self.current:
                    self.current.next = node
                    node.prev = self.current
                self.current = node
                nextNode = node.next
                # 由于是深度优先，所以要先遍历 child
                if node.child:
                    dfs(node.child)
                    node.child = None
                
                dfs(nextNode)
        
        # 相当于一个按顺序游走的指针
        # 当其走到了某个 child 分支的尽头，递归会返回
        # 这时候 current 就会和父级列表保存的「nextNode」建立连接
        self.current = None
                
        dfs(head)
        return head
```

其实和遍历二叉树差不多，但是注意这里是双向链表，还要维护 `node.prev` 指针。


