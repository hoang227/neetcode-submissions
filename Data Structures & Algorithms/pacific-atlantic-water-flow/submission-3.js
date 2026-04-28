class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pac = new Set(), atl = new Set()
        const rows = heights.length, cols = heights[0].length

        const dfs = (r,c,seen,prevH) => {
            const key = `${r},${c}`
            if (r < 0 || r >= rows || c < 0 || c >= cols) return
            if (seen.has(key)) return
            if (heights[r][c] < prevH) return

            seen.add(key)

            dfs(r+1, c, seen, heights[r][c])
            dfs(r-1, c, seen, heights[r][c])
            dfs(r, c+1, seen, heights[r][c])
            dfs(r, c-1, seen, heights[r][c])
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pac, heights[r][0]) // pacific left
            dfs(r, cols - 1, atl, heights[r][cols - 1]) // atlantic right
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c, pac, heights[0][c]) // pacific top
            dfs(rows - 1, c, atl, heights[rows - 1][c]) // atlantic bottom
        }

        return [...pac].filter(i => atl.has(i)).map(s => s.split(',').map(i => parseFloat(i)))
    }
}
