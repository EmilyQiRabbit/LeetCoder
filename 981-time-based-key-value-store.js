/**
 * @Topic Binary Search - Medium
 * 
 * @Question 
 * Create a timebased key-value store class TimeMap, that supports two operations.
 * 1. set(string key, string value, int timestamp)
 *   Stores the key and value, along with the given timestamp.
 * 2. get(string key, int timestamp)
 *   Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
 *   If there are multiple such values, it returns the one with the largest timestamp_prev.
 *   If there are no values, it returns the empty string ("").
 * 
 * @Solution 
 * 1. 关键在于读懂题目
 * 2. 二分法搜索
 * 3. 其实默认了每次 set 的 timestamp 都是递增的，否则二分法在这里不成立。但是题目中并没有说明
 * 
 */

// 如下为题目解答：
/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
  this.store = {}
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (this.store[key]) {
      this.store[key].push({value, timestamp})
  } else {
      this.store[key] = [{value, timestamp}]
  }
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  const arr = this.store[key]
  if (arr) {
      return this.binarySearch(arr, timestamp, 0, arr.length - 1, '');
  }
  return ''
};

// 二分法
TimeMap.prototype.binarySearch = function (arr, targetTimestamp, start, end, bestValue) {      

  if (start > end) {
      return bestValue;
  }

  // 取中间 -> 即、二分
  const mid = start + Math.floor((end - start) / 2);
  const curTimestamp = arr[mid].timestamp;
  const curValue = arr[mid].value;

  // 如果当前时间比要寻找的时间大，那么我们就去小的那一半找
  if (curTimestamp > targetTimestamp) {
      return this.binarySearch(arr, targetTimestamp, start, mid - 1, bestValue);
  }

  // 如果当前时间比要寻找的时间小，那么我们就去大的那一半找
  if (curTimestamp < targetTimestamp) {
      return this.binarySearch(arr, targetTimestamp, mid + 1, end, curValue);
  }

  if (curTimestamp === targetTimestamp) {
      return curValue;
  }
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = Object.create(TimeMap).createNew()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/