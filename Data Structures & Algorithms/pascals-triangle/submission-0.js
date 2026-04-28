class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const res = []
        let level = 1
        let row = []
        while (level <= numRows) {
            for (let i = 0; i < level; i ++) {
                if (i === 0 || i === level - 1) row.push(1)
                else {
                    row.push(res.at(-1)[i-1] + res.at(-1)[i])
                }
            }
            res.push(row)
            level++
            row = []
        }
        return res
    }
}
