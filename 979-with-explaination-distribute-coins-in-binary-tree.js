/**
 * @Topic two pointers - Medium
 * @Question Given the root of a binary tree with N nodes,
 *           each node in the tree has node.val coins, and there are N coins total.
 *           In one move, we may choose two adjacent nodes and move one coin from one node to another. 
 *           (The move may be from parent to child, or from child to parent.)
 *           Return the number of moves required to make every node have exactly one coin.
 * @Solution 1. 算法本身并不难，即深度有限搜索；但是如何理解题目，将算法应用，感觉就比较难了。
 *           2. 思路：
 *              如果叶子节点上没有硬币，那么它其实就是提供了 -1 硬币。
 *              那么我们就需要从它的父级节点推给它一枚硬币。
 *              如果这个叶子上有硬币，例如 4 枚，那么它就需要推给它的父节点 3 枚硬币。
 *              综上，一个叶子节点需要的硬币移动步数其实就是 (node.val - 1) 的绝对值。
 *              我们把这片叶子所能提供的硬币数目（可能是负数，也就是它需要硬币）
 *              以及需要移动的步数全都转移到其父节点上去，
 *              那么此时，其实这片叶子节点就被等价的消除了。
 *              以此类推，就可以叠加出所有硬币需要移动的步数。
 *           3. 思路是由下至上的，并采用了等效的方法来消减复杂度。
 */

// 如下为题目解答：
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
let result = 0
const dfs = (node) => {
    if (!node) return 0
    const left = dfs(node.left), right = dfs(node.right)
    result += Math.abs(left) + Math.abs(right)
    return node.val + left + right -1
}
var distributeCoins = function(root) {
    result = 0
    dfs(root)
    return result
};
