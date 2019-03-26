/**
 * @param {number[]} cost
 * @return {number}
 * Topic: Dynamic Programming
 */
var minCostClimbingStairs = function(cost) {
  cost.push(0)
  const len = cost.length
  const result = new Array(len)
  result[0] = cost[0]
  result[1] = cost[1]
  for(let i=2; i<=len; i++) {
      result[i] = Math.min(result[i-1], result[i-2]) + cost[i]
  }
  return  Math.min(result[len-1], result[len-2])
};