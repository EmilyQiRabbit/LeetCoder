# 386. Lexicographical Numbers

## Topic

Given an integer n, return 1 - n in lexicographical order.

For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

## Solution

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const result = [];
    for (let i=1; i<10; i++) {
        dfs(i, n, result)
    }
    return result;
};

function dfs(base, max, result) {
    if (base > max) return;
    result.push(base);
    for (let i=0; i<10; i++) {
        if (base*10 + i <= max) {
            dfs(base*10 + i, max, result)
        }
    }
}

// 这个最耍赖的我首先想到的方法，Runtime 结果居然和我辛辛苦苦写出来的 dfs 差不多，我哭了。
// let lexicalOrder = (N, A = []) => {
//     while (N)
// 	    A.push(`${N--}`);
//     return A.sort().map(s => Number(s));
// };

```