class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    smallestCommonElement(mat) {
        const seen = new Map()

        for (let r = 0; r < mat.length; r++) {
            for (let c = 0; c < mat[0].length; c++) {
                const tile = mat[r][c]
                seen.set(tile, seen.has(tile) ? seen.get(tile) + 1 : 1)
            }
        }

        const common = [...seen].filter(([k, v]) => v === mat.length).map(p => p[0])
        return common.length ? common.sort().at(0) : -1
    }
}
