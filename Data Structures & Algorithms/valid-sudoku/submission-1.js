class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let columns = Array.from({length: 9}, () => [])
        for (let i = 0; i < 9; i++) {
            for (let j = 0;j < 9; j++) {
                columns[i][j] = board[j][i]
            }
        }

        let squares = Array.from({length: 9}, () => [])
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let row = Math.floor(i/3) + (3 * Math.floor(j/3))
                let column = (j % 3) + (3 * (i % 3))
                squares[row][column] = board[i][j]
            }
        }

        for (let row of board) if (!this.isValid(row)) return false
        for (let col of columns) if (!this.isValid(col)) return false
        for (let sq of squares) if (!this.isValid(sq)) return false

        return true
    }

    isValid(nums) {
        const seen = new Set()
        for (let n of nums) {
            if (n !== '.') {
                if (seen.has(n)) return false
                seen.add(n)
            }
        }
        return true
    }
}
