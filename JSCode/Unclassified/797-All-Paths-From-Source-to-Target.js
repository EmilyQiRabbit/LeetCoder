/**
 * @param {number[][]} graph
 * @return {number[][]}
 * 
 * 在这里解释一下题目的意思
 * graph 这个二维数组描绘了一个有向无圈图
 * graph 中每个元素的下标，表示的是一个节点，而每个元素则表示这个节点的下一个节点。
 * 
 * 以 [[1,2],[3],[3],[]] 为栗子，节点 0，它的下一个节点包括 1 和 2，节点 1，下一个节点是 3。
 * 而节点 3，它没有下一个节点了，所以数组为空。
 * 
 * 读懂了题，其实解答并不难，就是一个深度优先搜索。
 * 
 */
var allPathsSourceTarget = function(graph) {
  let ret = [];
  graph[0].forEach(function(nextPoint){
    search(nextPoint, [0])
  })
  return ret;
  
  function search(next, thePath){ // 深度优先搜索
    if(graph[next].length === 0){
      thePath.push(next);
      ret.push(thePath)
      return
    }
    thePath.push(next);
    let newDirect = graph[next];
    newDirect.forEach(function(item){
      search(item, thePath.slice(0))
    })
  }
};