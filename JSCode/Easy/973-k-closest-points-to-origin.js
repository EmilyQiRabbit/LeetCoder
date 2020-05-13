/**
 * @Topic sort - Easy
 * 
 * @Question 
 * We have a list of points on the plane. 
 * Find the K closest points to the origin (0, 0).
 * (Here, the distance between two points on a plane is the Euclidean distance.)
 * You may return the answer in any order. 
 * The answer is guaranteed to be unique (except for the order that it is in.)
 * 
 * @Solution
 * 1. 其实就是排序算法的变体，这里采用了快速排序
 * 2. 动图说明可见：https://github.com/EmilyQiRabbit/LeetCoder/blob/master/assets/quick_sort.gif
 * 
 */

// 如下为题目解答：
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  const result = quickSort(points).slice(0, K)
  return result
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
      if (arr[i][0]*arr[i][0] + arr[i][1]*arr[i][1] < arr[pivot][0] * arr[pivot][0] + arr[pivot][1] * arr[pivot][1]) {
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

// 另一种更简单的快排，其时间复杂度为 nlog(n)，这种简单多了天啦噜...
function quickSort1(arr) {
  if (arr.length<=1) {return arr;}
  var left = [],
    right = [],
    baseDot = Math.round(arr.length/2),
    base = arr.splice(baseDot, 1)[0];

  for (var i =0; i <arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([base], quickSort(right));
}
