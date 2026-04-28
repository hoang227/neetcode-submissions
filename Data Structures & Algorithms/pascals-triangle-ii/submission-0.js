class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        if (rowIndex === 0) return [1]
        if (rowIndex === 1) return [1,1]
        let res = [1,1]
        for (let i = 0; i < rowIndex - 1; i++) {
            let curr = [1]
            for (let j = 0; j < res.length - 1; j++) {
                curr.push(res[j] + res[j + 1])
            }
            curr.push(1)
            console.log(curr)
            res = curr
        }
        return res
    }
}
