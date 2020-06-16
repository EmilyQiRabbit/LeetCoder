/**
 * Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
 * 
    The root is the maximum number in the array.
    The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
    The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

    Construct the maximum tree by the given array and output the root node of this tree.
 */

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
    return null
  }
  const { max, maxIndex } = findMax(nums);
  const left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  const right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
  return new TreeNode(max, left, right)
};

function findMax(array) {
  let max = -Infinity;
  let maxIndex = -1;
  array.forEach((item, index) => {
    if (item > max) {
      max = item;
      maxIndex = index;
    }
  })
  return { max, maxIndex }
}

// 更优的解法，复杂度只要 O(N)

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
// class Solution {
//   public:
//       TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
//           vector<TreeNode*> stk;
//           for (int i = 0; i < nums.size(); ++i)
//           {
//               TreeNode* cur = new TreeNode(nums[i]);
//               while (!stk.empty() && stk.back()->val < nums[i])
//               {
//                   cur->left = stk.back();
//                   stk.pop_back();
//               }
//               if (!stk.empty())
//                   stk.back()->right = cur;
//               stk.push_back(cur);
//           }
//           return stk.front();
//       }
//   };
