/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const G = new Array(n+1).fill(0)
  G[0] = 1
  G[1] = 1
  for (let i=2; i<=n; ++i) {
      for(let j=1; j<=i; ++j) {
          G[i] += G[j-1] * G[i-j];
      }
  }
  return G[n]
}

/**
 * 原题地址：https://leetcode.com/problems/unique-binary-search-trees/description/
 * Solution: Dynamic Programming
 * 
 * 假设 G(n) 表示长度为 n 的数列所能组成的二叉搜索树的数量
 * 假设 F(i, n) 表示根节点为 i、且长度为 n 的数列所能组成的的二叉搜索树的数量
 * 
 * 那么可见 G(n) = F(i, n) i 从 1 ~ n 的求和
 * 同时 G(0)=1, G(1)=1
 * 
 * 下面我们需要找出 F(i, n) 和 G 的关系
 * 
 * 当 i 为根节点的时候，数列被分成了两个部分：0~i-1 i+1~n
 * 所以，F(i, n) 的左子树就有 G(i-1) 个解，同理右子树为 G(n-i) 个解
 * 因此：F(i,n) = G(i−1) * G(n−i)
 * 
 * 那么就可以得出：G(n) = G(i−1) * G(n−i) i 从 1 ~ n 的求和
 * 
 * 进一步，这其实是一个卡塔兰数列
 * 
 * G(n) 的递推公式可以求得。参见 [wikipedia](https://zh.wikipedia.org/wiki/卡塔兰数)
 */