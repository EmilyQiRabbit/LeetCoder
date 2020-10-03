# 1305. All Elements in Two Binary Search Trees

## Topic

Given two binary search trees root1 and root2.

Return a list containing all the integers from both trees sorted in ascending order.

## Solutions

1. 思路一：对 binary search tree 进行前序遍历即可获取升序排列的数组。然后使用双指针合并两个数组即可。
2. 思路二：直接对两个 binary search tree 合并。

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

var getAllElements = function(root1, root2) {
    const result1 = [], result2 = [];
    let result = [];
    getAscOrder(root1, result1);
    getAscOrder(root2, result2);
    // console.log(result1, result2);
    let i=0, j=0;
    while (i<result1.length && j<result2.length) {
        if (result1[i] <= result2[j]) {
            result.push(result1[i]);
            i++;
        } else {
            result.push(result2[j]);
            j++;
        }
    }
    if (j<result2.length) {
        result = result.concat(result2.slice(j))
    }
    if (i<result1.length) {
        result = result.concat(result1.slice(i))
    }
    return result;
};

function getAscOrder(root, result) {
    if (!root) return;
    root.left && getAscOrder(root.left, result);
    result.push(root.val);
    root.right && getAscOrder(root.right, result);
}
```

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

var getAllElements = function(root1, root2) {
    const stack1 = [], stack2 = [];
    let tree1 = root1, tree2 = root2;
    const result = [];
    while(tree1 || tree2 || stack1.length || stack2.length) {
        while (tree1) {
            stack1.push(tree1);
            tree1 = tree1.left;
        }
        while (tree2) {
            stack2.push(tree2);
            tree2 = tree2.left;
        }
        if (!stack2.length || (stack1.length && stack1[stack1.length-1].val <= stack2[stack2.length-1].val)) {
            tree1 = stack1.pop();
            result.push(tree1.val);
            tree1 = tree1.right
        } else {
            tree2 = stack2.pop();
            result.push(tree2.val);
            tree2 = tree2.right;
        }
    }
    return result;
};
```
