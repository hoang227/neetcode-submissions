class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const pac = new Set()
        const atl = new Set()
        const res = new Set()
        const seen = new Set()

        const rows = heights.length
        const cols = heights[0].length

        const dfs = (r,c,source) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols) return

            const key = `${r},${c}`
            if (seen.has(key)) return

            seen.add(key)

            if (r === 0 || c === 0) {
                pac.add(source)
                if (atl.has(source)) res.add((source))
            }

            if (r === rows - 1 || c === cols - 1) {
                atl.add(source)
                if (pac.has(source)) res.add((source))
            }

            if (r < rows - 1 && heights[r][c] >= heights[r+1][c]) dfs(r+1,c,source)
            if (r > 0 && heights[r][c] >= heights[r-1][c]) dfs(r-1,c,source)
            if (c < cols - 1 && heights[r][c] >= heights[r][c+1]) dfs(r,c+1,source)
            if (c > 0 && heights[r][c] >= heights[r][c-1]) dfs(r,c-1,source)
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r,c,[r,c])
                seen.clear()
                console.log(r,c, res)
            }
        }

        return [...res]
    }
}
