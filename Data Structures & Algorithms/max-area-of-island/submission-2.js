class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {

        const rows = grid.length
        const cols = grid[0].length
        const seen = new Set()
        let maxArea = 0
        let curr = 0

        const dfs = (r,c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return
            if (grid[r][c] === 0) return

            const key = `${r},${c}`
            if (seen.has(key)) return

            seen.add(key)
            curr++

            dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1 && !seen.has(`${r},${c}`)) {
                    dfs(r,c)
                    maxArea = Math.max(maxArea, curr)
                    curr = 0
                }
            }
        }

        return maxArea

    }
}
