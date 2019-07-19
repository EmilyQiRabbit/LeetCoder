# 844. Backspace String Compare

## 原题

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:
```
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
```

Example 2:
```
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
```

Example 3:
```
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
```

Example 4:
```
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
```

## 解答

```python
class Solution(object):
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """
        def convertStr(str):
            stack = []
            for i, ch in enumerate(str):
                if ch == '#':
                    if len(stack):
                        stack.pop()
                else:
                    stack.append(ch)
            return "".join(stack)
        
        return convertStr(S) == convertStr(T)
```

**Follow up:**
  Can you solve it in O(N) time and O(1) space?

```python
class Solution(object):
    def backspaceCompare(self, S, T):
        """
        :type S: str
        :type T: str
        :rtype: bool
        """
        def convertStr(str):
            index = 0
            length = len(str)
            while index < length:
                if str[index] == '#':
                    if index < 2 :
                        str = str[index+1:]
                        length -= (1 + index)
                        index = 0
                    else:
                        str = str[:index-1] + str[index+1:]
                        index -= 1
                        length -= 2
                else:
                    index += 1
            return str

        return convertStr(S) == convertStr(T)
```