/**
 * @Topic Greedy - Easy
 * 
 * @Question 
 * Given an array A of integers, 
 * we must modify the array in the following way: 
 * we choose an i and replace A[i] with -A[i], 
 * and we repeat this process K times in total.  
 * (We may choose the same index i multiple times.)
 * 
 * Return the largest possible sum of the array after modifying it in this way.
 * 
 * @Solution 
 * 1. 贪心算法
 * 2. 第一步还是要排序
 * 3. 对于小于零的数，如果还有大于一次的翻转机会，就用上
 * 4. 对于大于零的数，如果还有大于两次的翻转机会，就用上，这样正数还是正数
 * 5. 3 + 4 的策略可以使每一次相加的和都尽可能的大
 * 6. 最后，如果 K 是偶数，那么就不用动了，因为此时，遍历过了一次 A 数组得到的 sum 一定最大
 * 7. 如果是奇数，那么，如果有记录最大的负数，就把它反转过来。否则，如果有 0，sum 就不动，再否则，就反转记录的最小的正数。
 * 8. 加 2 和加 -2 相差 4，所以最后的 if (K % 2) 的处理都要 *2
 * 
 */

 // 如下为题目解答：
 /**
 * @param {number[]} A
 * @param {number} K
 * @return {number} 
 */
var largestSumAfterKNegations = function(A, K) {
  A = quickSort(A)
  let sum = 0
  let min_positive = Infinity
  let min_negetive = 0
  let zero = false
  A.forEach((a) => {
      if (a < 0) {
          if (K >= 1) {
              sum += -a
              K -= 1
              if (-a < min_positive) {
                  min_positive = -a
              }
          } else {
              sum += a
              if (a < min_negetive) {
                  min_negetive = a
              }
          }
      } else if (a > 0) {
          sum += a
          if (K >= 2) {
              K -= 2
          }
          if (a < min_positive) {
              min_positive = a
          }
      } else {
          zero = true
      }
  })
  if (K % 2) {
      if (min_negetive < 0) {
          sum += -min_negetive * 2
      } else if (!zero) {
          sum -= min_positive * 2
      }
  }
  return sum
};

// 快速排序
function quickSort(arr, left, right) {
var len = arr.length,
    partitionIndex,
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;

if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex-1);
    quickSort(arr, partitionIndex+1, right);
}
return arr;
}

function partition(arr, left ,right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }       
  }
swap(arr, pivot, index - 1);
  return index-1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}