# 1481. Least Number of Unique Integers after K Removals

## Topic

Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

**Example 1:**

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.

**Example 2:**

Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

## Solution 

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts0 = function(arr, k) {
    const dataMap = arr.reduce((map, item, index) => {
        map[item] = map[item] ? map[item] + 1 : 1;
        return map;
    }, {});
    const sorted = Object.keys(dataMap).sort((a, b) => {
        return dataMap[a] - dataMap[b]
    });
    let len = sorted.length;
    let result = len;
    for (let index=0; index<len; index++) {
        if (dataMap[sorted[index]] <= k) {
            k -= dataMap[sorted[index]];
            result -= 1;
        }
        if (k === 0) {
            break;
        }
    }
    return result;
};

let findLeastNumOfUniqueInts1 = (A, K, m = new Map(), all = []) => {
    A.forEach(x => m.set(x, 1 + (m.get(x) || 0)));
    [...m.entries()]
        .sort((a, b) => a[1] - b[1])
        .forEach(([x, n]) => all.push(...Array(n).fill(x))); // sort all by ascending frequency (x occurs n times)
    return new Set(all.slice(K)).size; // greedily drop first K least freq nums and return size of remaining set
};

```

贪心算法。
