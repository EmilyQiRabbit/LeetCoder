/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let treeMap = {};
  formatTree(root)
  let returnArray = []
  //console.log(treeMap)
  for (let key in treeMap){
    if(treeMap[key].length > 1) {
      returnArray.push(treeMap[key][0])
    }
  }
  return returnArray
  
  function formatTree(node) {
    if(node){
      let str = '';
      str += node.val;
      let strLeft = formatTree(node.left);
      let strRight = formatTree(node.right);
      str += '-' + strLeft + '-' + strRight;
      if (treeMap[str]){
        treeMap[str].push(node)
      } else {
        treeMap[str] = [node]
      }
      return str
    }
    return 'null'                                                         
  }
};