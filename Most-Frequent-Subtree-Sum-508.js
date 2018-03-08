/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  let treeMap = {}
  if (!root) {
    return []
  }
  getSubTreeSum(root)
  let max = 0
  for(let key in treeMap) {
    if (treeMap[key] > max) {
      max = treeMap[key]
    }
  }
  
  let array = []
  for(let key in treeMap) {
    if (treeMap[key] === max) {
      array.push(parseInt(key))
    }
  }
  return array;
  
  function getSubTreeSum(node){ // 自下而上
    if (!node) {
      return 0
    }
    if(!node.left && !node.right){
      treeMap[node.val] = treeMap[node.val] ? treeMap[node.val] + 1 : 1
      return node.val
    }
    let sum1 = getSubTreeSum(node.left)
    let sum2 = getSubTreeSum(node.right)
    let sum = node.val + sum1 + sum2
    treeMap[sum] = treeMap[sum] ? treeMap[sum] + 1 : 1
    return sum
  }
};