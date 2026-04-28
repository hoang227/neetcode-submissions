class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const seen = new Set()
        let minTime = 0

        const queue = []

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) queue.push([r,c,0])
            }
        }

        while (queue.length) {
            const [r,c,d] = queue.shift()

            if (r < 0 || r >= rows || c < 0 || c >= cols) continue

            if (grid[r][c] === 0) continue

            const key = `${r},${c}`

            if (seen.has(key)) continue

            seen.add(key)

            if (grid[r][c] === 1) {
                grid[r][c] = 2
                minTime = Math.max(minTime,d)
            }
            console.log(r,c,d, grid, minTime)

            queue.push([r+1,c,d+1])
            queue.push([r-1,c,d+1])
            queue.push([r,c+1,d+1])
            queue.push([r,c-1,d+1])
        }

        console.log(queue)

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) return -1
            }
        }

        return minTime
    }
}
