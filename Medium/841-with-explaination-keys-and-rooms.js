/**
 * @Topic Depth-first Search - Medium
 * 
 * @Question 
 * There are N rooms and you start in room 0.
 * Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 
 * Formally, each room i has a list of keys rooms[i], 
 * and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length. 
 * A key rooms[i][j] = v opens the room with number v.
 * Initially, all the rooms start locked (except for room 0). 
 * You can walk back and forth between rooms freely.
 * Return true if and only if you can enter every room.
 * 
 * @Solution
 * 1. 深度优先搜索，如果这是一个树结构，就很容易了
 * 2. 但如果是数组结构，就需要一个 stack 来存储没有访问过的节点
 * 3. 直到所有节点都访问过了（即 while (stack.length) ），DFS 就完成了
 * 
 */

// 如下为题目解答：
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const room_len = rooms.length, can_visite = {0: true}
  let stack = [...rooms[0]]

  while (stack.length) {
      const next_room_index = stack.pop()
      if (!can_visite[next_room_index]) { // 没有访问过的房间
          can_visite[next_room_index] = true
          stack = stack.concat(rooms[next_room_index])
      }
  }
  
  return room_len === Object.keys(can_visite).length
  
};
