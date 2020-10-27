# 121. Best Time to Buy and Sell Stock

## Topic

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

## Solution

### 旧版本

这道题最好使用动态规划，之前的版本有点贪心算法的意思 🤔

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    if(len === 0 || len == 1){
        return 0;
    }
    var maxprofit = 0;
    var minprice = prices[0];
    prices.forEach(function(item){
        var profit = item - minprice;
        if(profit>maxprofit){
            maxprofit = profit;
        }
        if(item<minprice){
            minprice = item;
        }
    });
    return maxprofit;
};
```

### 新版本

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxCur = 0, maxSoFar = 0;
    for(let i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }
    return maxSoFar;
};
```
