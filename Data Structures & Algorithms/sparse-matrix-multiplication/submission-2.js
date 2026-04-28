class Solution {
    /**
     * @param {number[][]} mat1
     * @param {number[][]} mat2
     * @return {number[][]}
     */
    calculate(r, matrix, cIdx) {
        return r.reduce((acc, curr, i) => {
            return acc + (curr * matrix[i][cIdx])
        }, 0)
    }

    multiply(mat1, mat2) {
        let res = Array.from({length: mat1.length}, () => Array(mat2[0].length).fill(0))

        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[0].length; j++) {
                let row = mat1[i]
                res[i][j] = this.calculate(row, mat2, j)
            }
        }

        return res
    }
}
