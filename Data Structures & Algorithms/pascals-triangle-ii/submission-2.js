class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        const res = [1]
        for (let i = 1; i <= rowIndex; i++) {
            res.push(
                Math.floor(res[res.length - 1] * (rowIndex - i + 1) / i)
            )
        }

        return res
    }
}
