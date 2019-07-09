# 1054. Distant Barcodes

## 原版题目：

In a warehouse, there is a row of barcodes, where the i-th barcode is barcodes[i].

Rearrange the barcodes so that no two adjacent barcodes are equal.  You may return any answer, and it is guaranteed an answer exists.

Example 1:

```
Input: [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]
```
Example 2:

```
Input: [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,2,1,2,1]
```

Note:

```
1 <= barcodes.length <= 10000
1 <= barcodes[i] <= 10000
```

hint:

We want to always choose the most common or second most common element to write next. What data structure allows us to query this effectively?

## 解答

[代码来源](https://leetcode.com/problems/distant-barcodes/discuss/299225/Python-Set-Odd-Position-and-Even-Position)

```python
class Solution(object):
    def rearrangeBarcodes(self, packages):
        i, n = 0, len(packages)
        res = [0] * n
        for k, v in collections.Counter(packages).most_common():
            for _ in xrange(v):
                res[i] = k
                i += 2
                if i >= n: i = 1
        return res
```

## 解析

* 关键点 1: 如何重排
  * 要将数组中所有数字，按照其**出现次数的多少**顺序排列。

* 关键点 2: 如何组合
  * 方法 1: 总是优先排列出现次数最多或者第二多的数字
  * 方法 2: 间隔一位插入数字，也就是上面解答中的方式，由于题目保证一定有一个解，所以这种方式也是可行的。

*哎呀果然 python 大法好...JavaScript 数据结构太少了，要想实现这个还真的挺麻烦的...我哭哭...*
