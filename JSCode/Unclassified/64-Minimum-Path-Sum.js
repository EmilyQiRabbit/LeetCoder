/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划
var minPathSum = function(grid) {
	let r = grid.length
	let c = grid[0].length
	for (let i=0; i<r; i++) {
			for (let j=0; j<c; j++) {
					if (i == 0 && j != 0) {
			grid[i][j] = grid[i][j] + grid[i][j - 1];
		} else if (i != 0 && j == 0) {
			grid[i][j] = grid[i][j] + grid[i - 1][j];
		} else if (i == 0 && j == 0) {
			grid[i][j] = grid[i][j]
		} else {
			grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j]
		}
			}
	}
	return grid[r - 1][c - 1]
};
