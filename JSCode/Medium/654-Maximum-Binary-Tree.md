# 654. Maximum Binary Tree

## Topic

Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

1. The root is the maximum number in the array.
2. The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
3. The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

## Primary

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums.length) {
        return null;
    } else if (nums.length === 1) {
        return new TreeNode(nums[0]);
    } else {
        const maxIndex = findMaxNumIndex(nums);
        const leftNode = constructMaximumBinaryTree(nums.slice(0, maxIndex));
        const rightNode = constructMaximumBinaryTree(nums.slice(maxIndex+1, nums.length));
        return new TreeNode(nums[maxIndex], leftNode, rightNode);
    }
};

function findMaxNumIndex(array) {
    let max = -Infinity;
    let maxIndex = 1;
    array.forEach((item, index) => {
        if (item > max) {
            max = item;
            maxIndex = index
        }
    })
    return maxIndex;
}
```

## Advanced

```js
var constructMaximumBinaryTree = function(nums) {
    const stk = [];
    nums.forEach((num) => {
        const curNode = new TreeNode(num);
        while (stk.length && stk[stk.length - 1].val < num) {
            curNode.left = stk[stk.length - 1];
            stk.pop();
        }
        if (stk.length) {
            stk[stk.length - 1].right = curNode
        }
        stk.push(curNode);
    });
    return stk[0];
};
```
