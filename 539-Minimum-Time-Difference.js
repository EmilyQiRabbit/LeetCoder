/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let timeArray = [];
  timePoints.forEach(function(time){
    timeArray.push(changeTimeToInt(time))
  });
  timeArray.sort(function(a, b){
    return a - b > 0 ? 1 : -1
  })
  let minDiff = Infinity;
  let wholeDay = 24 * 60;
  timeArray.forEach(function(time, index){
    if (index > 0) {
      let gap = time - timeArray[index - 1]
      minDiff = gap < minDiff ? gap : minDiff
    }
  });
  let firstAndLast = timeArray[0] + wholeDay - timeArray[timeArray.length - 1]
  minDiff = firstAndLast < minDiff ? firstAndLast : minDiff // 因为有这一道验证，不必在上一个 forEach 中考虑是否超过半天的可能性
  return minDiff
  
  function changeTimeToInt(timeStr){
    let array = timeStr.split(':');
    return parseInt(array[0])*60 + parseInt(array[1])
  }
};