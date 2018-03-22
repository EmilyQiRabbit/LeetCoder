/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let len = 0, start = root;
  while(start){
    len++;
    start = start.next;
  }
  // Array fill 方法！厉害了这个！
  let average = Math.floor(len / k), margin = len % k, prev = root, ret = new Array(k).fill(null); 
  
  for (let i = 0; root && i < k; i++, margin--) {
    ret[i] = (root);
    for (let j=0; j<average + (margin>0 ? 1 : 0); j++){
      prev = root;
      root = root.next;
    }
    prev.next = null;
  }
  return ret
};
// 另一种方法
// var splitListToParts = function(root, k) {
//   let head = root;
//   let count = 0;
//   while(head !== null) {
//     count++;
//     head = head.next;
//   }
//   const flr = Math.floor(count / k);
//   const result = new Array(k).fill(flr);
//   for (let i=0; i<count-flr*k; i++) {
//     result[i] += 1;
//   }
//   return result.map(m => {
//     if (root === null) return null;
//     let head = root;
//     for(let i=0; i<m-1; i++) {
//         root = root.next;
//     }
//     let temp = root.next;
//     root.next = null;
//     root = temp;
//     return head;
//   });
// };