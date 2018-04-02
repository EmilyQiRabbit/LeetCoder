/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

 /**
  * 我的代码，虽然很丑陋，不过起码有 BFS（广度优先算法）算法的思路了 >.<
  * BFS 的关键点：
  * 逐“层”搜索，并将后一层放在一个队列里，一直循环读取这个队列（注意队列的特点，先进先出），直到队列为空。
  * 另外那个 dif += 8 其实就是为了一个 +1，一个 -1。
  * 
 */

var openLock = function(deadends, target) {
  let deadend = {}
  deadends.forEach(function(end){
    deadend[end] = 1
  })
  if(deadend['0000']){
    return -1
  }
  if(target === '0000'){
    return 0
  }
  let visited = {}, queue = [];
  queue.push('0000');
  for(let count = 1; queue.length>0; count++){
    for(let n=queue.length; n>0; n--){
      let current = queue.shift();
      for(let i=0;i<4;i++){
        for (let dif = 1; dif <= 9; dif += 8) {
          let s = current.slice(0, i) + (parseInt(current.charAt(i)) + dif) % 10 + current.slice(i+1) // + or -
          if (target === s) {
            return count;
          }
          if (!deadend[s] && !visited[s]) {
            queue.push(s)
          };
          visited[s] = 1;
        }
      }
    }
  }
  return -1
};

 /**
  * 大神的代码
  * 大神不处理字符串啊～大神处理数字啊！
  * 这就是大神，给跪了 0.0
  * .....
  * 云泥之别啊 [捂脸]
  * 
 */

var openLock = function(deadends, target) {
  target = parseInt(target);
  const deadendsSet = new Set();
  for (let deadend of deadends) deadendsSet.add(parseInt(deadend));
  
  if (deadendsSet.has(0)) return -1;
  
  const visited = new Set();
  const queue = [[0, 0]];
  
  let tuple = null;
  while (tuple = queue.shift()) {
      const [combo, level] = tuple;

      const nextCombos = getNextCombo(combo);
      for (let nextCombo of nextCombos) {
          if (nextCombo === target) return level + 1;
          if (!deadendsSet.has(nextCombo) && !visited.has(nextCombo)) queue.push([nextCombo, level + 1]);
          visited.add(nextCombo);
      }
  }
  
  return -1;
};

const getNextCombo = (combo) => {
  let results = [];
  for (let i = 1; i <= 1000; i *= 10) {
      const up = (combo % (i * 10) >= 9 * i) ? combo - 9 * i : combo + i;
      const down = (combo % (i * 10) < i) ? combo + 9 * i : combo - i;
      results.push(up, down);
  }
  return results;
};