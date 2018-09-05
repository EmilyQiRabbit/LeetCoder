/**
 * 这道题用到了一个随机算法：Reservoir Sampling —— 水塘抽样。
 * 这里先简单解释一下。
 * 
 * 水塘抽样是一种随机算法，其目的在于：
 * 从包含 n 个项目的集合 S 中随机的选取 k 个样本（其中 n 可能为一很大或未知的数量，也就正好是题目要求的：What if the linked list is extremely large...）
 * 
 * 算法包含如下几个步骤：
 * 1、从集合 S 中抽取前 k 项放入「水塘」中
 * 2、对于每一個 S[j] （j ≥ k）：
 *    随机产生一个范围从 0 到 j 的整數 r
 *    若 r < k，则把水塘中的第 r 项换成 S[j]
 * 
 * 于是我们就做到了：在一未知大小的集合中，随机取出一部分元素。
 * 
 * 代码如下，完美解决！
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
  let result = this.head;
  let current = this.head;
  let size = 1;
  while(current !== null){
    if(Math.floor(Math.random()*size) === 0){ // 产生 0－n 的伪随机整数
      result = current
    }
    size ++
    current = current.next
  }
  return result.val;
};