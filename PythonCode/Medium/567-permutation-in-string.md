# 567. Permutation in String

## 原题

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Example 1:
```
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
```

Example 2:
```
Input:s1= "ab" s2 = "eidboaoo"
Output: False
```

## 解答

思路：

1. 使用暴力搜索会超时。

2. 使用「滑动窗口」可以大大减少计算量。相当于每次只需要计算窗口滑动造成的 diff，窗口滑动之前之后的重叠部分不用重复计算。

3. 使用 hash table 或者长度为 26 的数组来记录字符串中字符顺序。

解法一：使用 hash table

```python
    def checkInclusion(self, s1, s2):
        """
        :type s1: str
        :type s2: str
        :rtype: bool
        """
        len_s1, len_s2, index_s2 = len(s1), len(s2), 1
        dict_s1 = {}
        dict_s2 = {}
        
        if len_s1 > len_s2:
            return False
        
        for index,ch in enumerate(s1):
            dict_s1[ch] = dict_s1[ch] + 1 if (ch in dict_s1) else 1
            ch_s2 = s2[index]
            dict_s2[ch_s2] = dict_s2[ch_s2] + 1 if (ch_s2 in dict_s2) else 1
        
        if not cmp(dict_s2, dict_s1):
                return True
        
        while index_s2 <= len_s2 - len_s1:
            ch_delete = s2[index_s2 - 1]
            ch_add = s2[len_s1 - 1 + index_s2]
            if (ch_delete in dict_s2):
                dict_s2[ch_delete] -= 1
                if not dict_s2[ch_delete]:
                    del dict_s2[ch_delete]
            dict_s2[ch_add] = dict_s2[ch_add] + 1 if (ch_add in dict_s2) else 1
            if not cmp(dict_s2, dict_s1):
                return True
            
            index_s2 += 1
            
        return False
```

解法二：使用长度为 25 的数组，这个方法更简洁

```python
def checkInclusion(self, s1, s2):
        A = [ord(x) - ord('a') for x in s1]
        B = [ord(x) - ord('a') for x in s2]

        target = [0] * 26
        for x in A:
            target[x] += 1

        window = [0] * 26
        for i, x in enumerate(B):
            window[x] += 1
            if i >= len(A):
                window[B[i - len(A)]] -= 1
            if window == target:
                return True
        return False
```
