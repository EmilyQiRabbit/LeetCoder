/**
 * @Topic DP - Medium
 * @Question In a country popular for train travel, 
 *           you have planned some train travelling one year in advance.
 *           The days of the year that you will travel is given as an array days.  
 *           Each day is an integer from 1 to 365.
 * 
 *           Train tickets are sold in 3 different ways:
 *           a 1-day pass is sold for costs[0] dollars;
 *           a 7-day pass is sold for costs[1] dollars;
 *           a 30-day pass is sold for costs[2] dollars.
 * 
 *           The passes allow that many days of consecutive travel.  
 *           For example, if we get a 7-day pass on day 2, 
 *           then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.
 *           Return the minimum number of dollars you need to travel every day in the given list of days.
 * @Solution 1. 啊啊啊啊啊啊啊啊啊啊啊又是 dp 问题，烦躁...
 *           2. 不想解释...
 * 
 */

// 如下为题目解答：
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const days_in_travel_plan = new Array(366).fill(0)
  days.forEach((day) => {
      days_in_travel_plan[day] = 1
  })
  const result = [0]
  const day_max = days[days.length - 1]
  for (let day = 1; day<= day_max ; day++) {
      if (!days_in_travel_plan[day]) {
          result[day] = result[day-1]
          continue
      }
      let min
      min = result[day-1] + costs[0];
      min = Math.min(min, result[Math.max(0, day-7)] + costs[1]);
      min = Math.min(min, result[Math.max(0, day-30)] + costs[2]);
      result[day] = min
  }
  return result[day_max]
};
