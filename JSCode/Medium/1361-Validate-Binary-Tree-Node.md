# 1361. Validate Binary Tree Nodes

## Topic

You have n binary tree nodes numbered from 0 to n - 1 where node i has two children `leftChild[i]` and `rightChild[i]`, return true if and only if all the given nodes form exactly one valid binary tree.

If node i has no left child then `leftChild[i]` will equal -1, similarly for the right child.

Note that the nodes have no values and that we only use the node numbers in this problem.

## Solution

```js
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const inDegree = new Array(n).fill(0);
    let root = -1;
    // 筛查是否有重复 node，及某个节点既是 left node，又是 right node
    for (let i = 0; i < n; i++) {
        if (leftChild[i]!=-1 && inDegree[leftChild[i]]++==1) { // If in-degree exceeds 1 return false.
            return false;
        }  
        else if(rightChild[i]!=-1 && inDegree[rightChild[i]]++==1) { // If in-degree exceeds 1 return false.
            return false;
        }  
    }
    // 找出唯一的根结点
    for (let i=0; i<n; i++) {
        if (inDegree[i] == 0) {
            if (root == -1) {
                root = i;
            }else{
                return false;
            }
        }
    }
    if (root === -1) {
        return false
    }
    
    // 确认数中节点数目为 n
    return countNodes(leftChild,rightChild,root) == n;
};

function countNodes(left, right, root) {
    if (root === -1) {
        return 0
    }
    return 1 + countNodes(left, right, left[root]) + countNodes(left, right, right[root])
}
```
