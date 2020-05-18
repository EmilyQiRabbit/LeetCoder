# 1161. Maximum Level Sum of a Binary Tree

## Topic

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level X such that the sum of all the values of nodes at level X is maximal.

## Solution

使用 DFS 或 BFS 均可。

### DFS

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    const level = 1;
    const arr = [-Infinity];
    const addNode = (node, level) => {
        if(node) {
            add(level, node.val)
            addNode(node.left, level + 1)
            addNode(node.right, level + 1)
        }
    }
    const add = (level, num) => {
        arr[level] = (arr[level] || 0) + num
    }
    addNode(root, level, arr);

    let max = -Infinity;
    let maxLevel = 0
    arr.forEach((item, index) => {
        if(item > max) {
            max = item
            maxLevel = index
        }
    })
    return maxLevel
};
```

### BFS

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let max = -Infinity, maxLevel = 0, curLevel = 0;
    if (!root) {
        return 0
    }
    let queue = [root];
    while(queue.length) {
        curLevel += 1;
        let sum = 0;
        const len = queue.length;
        for (let i=0; i<len; i++) {
            const curNode = queue[i];
            sum += curNode.val;
            if(curNode.left) {
                queue.push(curNode.left)
            }
            if(curNode.right) {
                queue.push(curNode.right)
            }
        }
        if (sum > max) {
            max = sum;
            maxLevel = curLevel
        }
        queue.splice(0, len);
    }
    return maxLevel
};
```
