/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1Len = getLengthOfList(l1);
  let l2Len = getLengthOfList(l2);
  let gap = l1Len - l2Len;
  
  let l1Copy = l1;
  if (gap < 0){ // l2 比较长
    l1 = l2;
    l2 = l1Copy;
    l1Copy = l1;
    gap = -gap // 交换 & 整理
  }
  while(gap > 0){ // 两加数对齐
    gap--;
    l1 = l1.next
  }
  while(l1){ // 相加
    l1.val = l1.val + l2.val;
    l1 = l1.next;
    l2 = l2.next
  }
  l1 = l1Copy;
  while (l1){
    let next = l1.next;
    if (next && next.val > 9){
      l1.val++;
      next.val -= 10;
      if (l1.val > 9) { // 如果超额，重新循环（因为链表不能后退）
        l1 = l1Copy;
        continue
      }
      next = next.next
    }
    l1 = l1.next
  }
  l1 = l1Copy;
  if(l1.val > 9){ // 处理第一个节点
    let node = new ListNode(1);
    node.next = l1;
    l1.val -= 10;
    l1Copy = node
  }
  return l1Copy

  // 方法
  function getLengthOfList(node){ // 获取链表长度
    let len = 0;
    while(node){
      len++;
      node = node.next;
    }
    return len;
  }
};