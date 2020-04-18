# 1372. Longest ZigZag Path in a Binary Tree

## Topic

Given a binary tree root, a ZigZag path for a binary tree is defined as follow:

* Choose any node in the binary tree and a direction (right or left).
* If the current direction is right then move to the right child of the current node otherwise move to the left child.
* Change the direction from right to left or right to left.
* Repeat the second and third step until you can't move in the tree.

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

### Related Topic

DP DFS

### Solution

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
 * @return {number}
 */
let max;

var longestZigZag = function(root) {
    max = 0;
    searchPath(root.left, 1, true);
    searchPath(root.right, 1, false);
    return max;
};

function searchPath(node, count, isLeft) {
    if (node) {
        if (isLeft) {
            searchPath(node.right, count + 1, false);
            searchPath(node.left, 1, true);
        } else {
            searchPath(node.left, count + 1, true);
            searchPath(node.right, 1, false);
        }
    } else if (count-1 > max) {
        max = count-1
    }
}
```
