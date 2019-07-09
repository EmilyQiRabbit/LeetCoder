/**
 * 这题什么鬼？莫名简单 =。=
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.map = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.map[key] = val
  return null
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let count = 0
  for(let key in this.map){
    if(key.startsWith(prefix)){
      count += this.map[key]
    }
  }
  return count
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */