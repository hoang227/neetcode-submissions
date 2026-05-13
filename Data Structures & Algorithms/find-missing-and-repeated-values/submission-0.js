class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                const y = Math.floor((Math.abs(grid[i][j]) - 1) / grid[0].length)
                const x = Math.floor((Math.abs(grid[i][j]) - 1) % grid[0].length)
                grid[y][x] = -Math.abs(grid[y][x])
            }
        }
        
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] > 0) {
                    const pos = (grid[0].length * i) + j + 1
                    return [grid[i][j], pos]
                }
            }
        }
    }
}
