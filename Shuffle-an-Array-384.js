/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.origin
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() { // 一个 shuffle 的方法
  let nums = this.origin // Accept ?! What F...不懂.....
  let rand = new Array(nums.length);
  for (let i = 0; i < nums.length; i++){
    let r = Math.floor(Math.random() * (i+1)); // 从 0~i 任选一个位置，0~i 这个范围很重要，保证了数字的随机引入并不会落空或覆盖
    // 遍历数组，保证 rand 中每个位置都有数字
    rand[i] = rand[r] ? rand[r] : 0; // ?: 运算保证最一开始为全零数组
    rand[r] = nums[i]; // 然后再把这个位置也更新
  }
  return rand;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */