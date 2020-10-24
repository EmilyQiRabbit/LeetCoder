# 714. Best Time to Buy and Sell Stock with Transaction Fee

## Topic

Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

## Solution

动态规划。

**1. 一个隐藏的条件是，结束后不可以有货物在手里了。**

**2. 动态规划最重要的步骤是找到迭代条件和初始状态。**

**3. 每一步决策其实都只有两种可能场景 * 两种选择：手里有货物 + 卖出；手里有货物 + 不卖；手里没货物 + 买入；手里没货物 + 不买。**

```js
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

var maxProfit = function(prices, fee) {
    let Profit_ik0 = 0;
    let Profit_ik1 = -Infinity;
    
    prices.forEach((price) => {
        const Profit_ik0_old = Profit_ik0;
        Profit_ik0 = Math.max(Profit_ik0, Profit_ik1 + price - fee);
        Profit_ik1 = Math.max(Profit_ik1, Profit_ik0_old - price);
    })

    return Profit_ik0;
};
```

## Referenct

[Most consistent ways of dealing with the series of stock problems](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/discuss/108870/Most-consistent-ways-of-dealing-with-the-series-of-stock-problems)

### Other similar Topic

121. Best Time to Buy and Sell Stock
122. Best Time to Buy and Sell Stock II
123. Best Time to Buy and Sell Stock III
188. Best Time to Buy and Sell Stock IV
309. Best Time to Buy and Sell Stock with Cooldown
714. Best Time to Buy and Sell Stock with Transaction Fee
