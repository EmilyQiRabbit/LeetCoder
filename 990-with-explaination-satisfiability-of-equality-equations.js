/**
 * @Topic Graph - Medium
 * @Question Given an array equations of strings that represent relationships between variables,
 *           each string equations[i] has length 4 and takes one of two different forms: "a==b" or "a!=b".
 *           Here, a and b are lowercase letters (not necessarily different) that represent one-letter variable names.
 *           Return true if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.
 * @Solution 1. 这道题的 Topic 是 Graph - 图
 *           2. 本来以为应该用矩阵完成，但是发现矩阵表示连等关系需要做较多的查询，而且逻辑也会比较复杂 -- 放弃
 *           3. 再分析：这道题其实就是把等式连接的元素归为一类，然后看不等式有没有把不同类的元素等价了，如果有，就错误
 *           4. 为了方便数组记录，将字母等价于数字：a = 0 b = 1...
 *           5. uf 这个数组就是用来分类的数组，其 index 表示字母：a = 0 b = 1...，value 用来分类
 *           6. 最后 uf 其实表示的是一个个等式，如 uf[0] = 1 就表示 a = b
 *           7. 所以最后核对不等式，就能根据 uf 保存的数据，核对不等式是否符合规则
 */

// 如下为题目解答：
/**
 * @param {string[]} equations
 * @return {boolean}
 */
const uf = new Array(26)
function find(x) {
    if (x != uf[x]) {
        uf[x] = find(uf[x]);
    }
    return uf[x];
}
var equationsPossible = function(equations) {
    for (let i = 0; i < 26; ++i) {
        uf[i] = i;
    }
    for (let e of equations) {
        if (e.charAt(1) == '=') {
            uf[find(e.charCodeAt(0) - 97)] = find(e.charCodeAt(3) - 97);
        }
    }
    for (let e of equations) {
        if (e.charAt(1) == '!' && (find(e.charCodeAt(0) - 97) == find(e.charCodeAt(3) - 97))) {   
            return false;
        }
    }
    return true;
};
