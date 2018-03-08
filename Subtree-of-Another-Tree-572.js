/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let treeMap = {}
  changeTreeToString(s, true)
  let str = changeTreeToString(t)
  return treeMap[str] ? true : false
  
  function changeTreeToString(node, setMap){ // 什么规则无所谓，只要规则一致就可以
    if(!node){
      return ''
    }
    let str1 = changeTreeToString(node.left, setMap);
    let str2 = changeTreeToString(node.right, setMap);
    let str3 = node.val + (str1.length ? '/' + str1 : '') + (str2.length ? '/' + str2 : '')
    if (setMap) {
      treeMap[str1] = true
      treeMap[str2] = true
      treeMap[str3] = true
    }
    return str3
  }
};