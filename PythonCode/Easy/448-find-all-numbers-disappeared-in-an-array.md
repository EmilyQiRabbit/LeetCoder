# 448. Find All Numbers Disappeared in an Array

## 原题

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

```
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

## 解答

```py
class Solution(object):
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # For each number i in nums,
        # we mark the number that i points as negative.
        # Then we filter the list, get all the indexes
        # who points to a positive number
        for num in nums:
            index = abs(num) - 1
            nums[index] = -abs(nums[index])
        return [i + 1 for i, num in enumerate(nums) if num > 0]
```

使用一个 hash 解决当然非常容易，比较难的是完成题目中的「without extra space and in O(n) runtime」。

上面这种解决方案，是将数字和 index 巧妙的做了对应：

将数组中数字看作下标，然后对应这个“下标”去修改数组中元素的符号；循环一圈后，看哪些位置的符号没有变动过，就说明原数组里面没有这个位置的下标对应的数字。
