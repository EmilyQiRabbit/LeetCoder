# 884. Uncommon Words from Two Sentences

## 原版题目

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

Example 1:

```
Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
```

Example 2:

```
Input: A = "apple apple", B = "banana"
Output: ["banana"]
```

## 解答

```py
class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> List[str]:
        mapAB, res = dict(), []
        listAB = (A + ' ' + B).split(' ')
        for word in listAB:
            mapAB[word] = (mapAB.get(word, 0)) + 1
        for key,value in mapAB.items():
            value < 2 and res.append(key)
        return res
```

## 解析

这是一道 Easy 题目，就是基础的 dict 和 list 操作。

*（然鹅 js 写手表示搞了好久才通过测试 @_@）*


 