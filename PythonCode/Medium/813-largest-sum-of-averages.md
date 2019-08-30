# 813. Largest Sum of Averages

## 原题

We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

Example:

```
Input: 
A = [9,1,2,3,9]
K = 3

Output: 20

Explanation: 
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
```

## 答案

[源代码 🔗...](https://leetcode.com/problems/largest-sum-of-averages/discuss/122739/C%2B%2BJavaPython-Easy-Understood-Solution-with-Explanation)

```py
class Solution(object):
    def largestSumOfAverages(self, A, K):
        memo = {}
        def search(n, k):
            if (n, k) in memo: return memo[n, k]
            if n < k: return 0
            if k == 1:
                memo[n, k] = sum(A[:n]) / float(n)
                return memo[n, k]
            cur, memo[n, k] = 0, 0
            for i in range(n - 1, 0, -1):
                cur += A[i]
                memo[n, k] = max(memo[n, k], search(i, k - 1) + cur / float(n - i))
            return memo[n, k]
        return search(len(A), K)
```

## 解题思路

这道题还是动态规划，但是如何“规划”有点不太好想。

动态规划最重要的是要找到递推“公式”，也就是通过当前状态，如何得出下一个状态的公式。

比如这道题，令 dp 是一个二维数组 `dp[N][K]`，其中 N 表示数组长度，K 表示分组个数。
那么简单的推导出：`dp[3][2] = Max(dp[2][1] + 2, dp[1,1] + (2+1)/2)`。

再深入一步，`dp[n][k]` 要怎么得出呢？
那就应该是：`dp[x][k-1]`（其中 x 从 0 ~ n-1）+ 剩下的 n-x 个元素的平均值，这所有的可能（因为 x 可以从 0 到 n-1）中的最大值。

于是写成代码就是：

```py
for i in range(n - 1, 0, -1):
  cur += A[i]
  memo[n, k] = max(memo[n, k], search(i, k - 1) + cur / float(n - i))
```
