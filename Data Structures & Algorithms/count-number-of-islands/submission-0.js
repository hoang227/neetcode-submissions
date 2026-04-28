class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length
        let count = 0
        const seen = new Set()

        const dfs = (r,c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return
            if (grid[r][c] === "0") return 

            const key = `${r},${c}`
            if (seen.has(key)) return

            seen.add(key)

            console.log(r,c,seen)

            dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === "1" && !seen.has(`${r},${c}`)) {
                    count++
                    dfs(r,c)
                }
            }
        }

        return count
    }
}
