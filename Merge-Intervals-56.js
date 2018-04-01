/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort(function(a, b){
    return a.start - b.start
  });
  let len = intervals.length, ret = [];
  if(len<1){
    return []
  }
  ret.push(intervals[0]);
  for(let i=1;i<len;i++){
    if(ret[ret.length - 1].end >= intervals[i].start){
      let newInterval = new Interval(ret[ret.length - 1].start, Math.max(intervals[i].end, ret[ret.length - 1].end))
      ret[ret.length - 1] = newInterval
    } else {
      ret.push(intervals[i])
    }
  }
  return ret
};