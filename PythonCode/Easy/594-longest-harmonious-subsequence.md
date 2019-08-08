# 594. Longest Harmonious Subsequence

## 原题

We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:

```
Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
```
 

Note: The length of the input array will not exceed 20,000.

## 解答

```py
class Solution(object):
    def findLHS(self, A):
        # 这个厉害
        count = collections.Counter(A)
        ans = 0
        for x in count:
            if x+1 in count:
                ans = max(ans, count[x] + count[x+1])
        return ans

```

python 的数据结构简直神器...给 python 大佬跪了～
