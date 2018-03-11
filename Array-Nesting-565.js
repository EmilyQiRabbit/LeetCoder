/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
  let testMap = {};
  let MaxNestLen = 0;
  nums.forEach(function(item, index){
    findNesting(index)
  })
  return MaxNestLen;
  
  function findNesting(start){
    if(!testMap[start]){
      let map = {};
      let len = nums.length - 1;
      let location = start;
      while(len > -1 && !map[location]){ // 查找‘圆环’
        map[location] = true // 该位置已经访问过
        location = nums[location];
        len --
      }
      if(map[location]){ // 找到‘圆环’
        let mark = location
        let n = 1
        while(nums[location] !== mark){ // 获取长度
          testMap[location] = true
          location = nums[location];
          n++;
        }
        MaxNestLen = n > MaxNestLen ? n : MaxNestLen;
      }
    }
  }
};