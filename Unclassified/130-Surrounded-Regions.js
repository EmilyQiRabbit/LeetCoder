/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/**
 * 说明：
 * 这道题，一开始我是用了一个对象 unChangePos = {} 来记录那些位置的 'O' 不能变成 'X'
 * 也就是 board[pos0][pos1] = 1; （倒数第八行）这行代码原来写的是 unChangePos[pos0 + ' ' + pos1] = 1
 * 之后在两个 forEach 中，通过判断 unChangePos[pos0 + ' ' + pos1] === 1 ? 来确定是否需要改变 'O'
 * 此时效率比较低，大概只在 50%
 * 算法修改为，不需要额外的空间，如果某个位置的 'O' 不符合要求，就改成 1
 * 然后在遍历 board 的时候，如果某个位置还是 'O'，就说明它没有和外部联通，可以改写成 'X'
 * 而如果某个位置是 '1'，就把它改回 'O' 即可。
 * 这样的效率为 97%。
 * Bingo～
 * 
 */

var solve = function(board) {
  let height = board.length;
  if(!height){
    return
  }
  let width = board[0].length;
  if(!width){
    return
  }
  for(let i=0; i<width; i++){
    DepthFirstSearch(0, i)
    DepthFirstSearch(height - 1, i)
  }
  for(let i=1; i<height-1; i++){
    DepthFirstSearch(i, 0)
    DepthFirstSearch(i, width - 1)
  }
  board.forEach(function(array, index1){
    array.forEach(function(item, index2){
      if(item === 'O'){
        board[index1][index2] = 'X'
      }
      if(item === 1){
        board[index1][index2] = 'O'
      }
    })
  })
  
  function DepthFirstSearch(pos0, pos1){
    if (pos0 < 0 || pos1 < 0 || pos0 >= height || pos1 >= width || board[pos0][pos1] === 1){
      return;
    }
    if(board[pos0][pos1] === 'O'){
      board[pos0][pos1] = 1;
      DepthFirstSearch(pos0 - 1, pos1)
      DepthFirstSearch(pos0, pos1 - 1)
      DepthFirstSearch(pos0 + 1, pos1)
      DepthFirstSearch(pos0, pos1 + 1)
    }
  }
};