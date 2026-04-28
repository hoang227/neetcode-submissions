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
        let arr = Array(9).fill(1)
        for (let n of nums) {
            if (n !== '.') {
                arr[n-1]--
                if (arr[n-1] < 0) return false
            }
        }
        return true
    }

}
