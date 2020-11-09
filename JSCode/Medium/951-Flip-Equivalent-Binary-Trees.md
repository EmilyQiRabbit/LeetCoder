# 951. Flip Equivalent Binary Trees

## Topic

For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivelent or false otherwise.

## Solution

Obviously，递归 hhhhh～完美 ☝️ᖗ乛◡乛ᖘ☝️，嗨皮一下，得写复盘去了...🤷‍♀️

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    return isFlipEquiv(root1, root2)
};

function isFlipEquiv(r1, r2) {
    if (r1 && r2 && r1.val === r2.val) {
        return (isFlipEquiv(r1.left, r2.left) && isFlipEquiv(r1.right, r2.right))
                || (isFlipEquiv(r1.left, r2.right) && isFlipEquiv(r1.right, r2.left))
    } else if (!r1 && !r2) {
        return true
    }
    return false
}
```
