class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const seen = new Set()

        const queue = []

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) queue.push([r,c,0])
            }
        }

        while (queue.length) {
            const [r,c,d] = queue.shift()
            if (r < 0 || r >= rows || c < 0 || c >= cols) continue
            if (grid[r][c] === -1) continue

            const key = `${r},${c}`
            if (seen.has(key)) continue
            
            if (grid[r][c] !== 0) grid[r][c] = Math.min(grid[r][c], d)

            seen.add(key)

            queue.push([r+1,c,d+1])
            queue.push([r-1,c,d+1])
            queue.push([r,c+1,d+1])
            queue.push([r,c-1,d+1])
        }
        
        return grid
    }
}
