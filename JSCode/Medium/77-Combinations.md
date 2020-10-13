# 77. Combinations

## Topic

Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

You may return the answer in any order.

Example 1:

```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

## Solution

Related topic: backTracking.

*this is a test log...*

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    backTracking(result, [], 1, n, k);
    return result;
};

function backTracking(result, comb, startIndex, n, k) {
    if (k === 0) {
        result.push(comb.slice(0));
        return
    }
    for (let i=startIndex; i<=n-k+1; i++) {
        comb.push(i);
        backTracking(result, comb, i+1, n, k-1);
        comb.pop();
    }
}
```
