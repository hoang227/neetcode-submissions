class TicTacToe {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.n = n
        this.winner = 0
        this.cols = new Map()
        this.rows = new Map()
        this.up = [0,0]
        this.down = [0,0]
    }

    /**
     * @param {number} row
     * @param {number} col
     * @param {number} player
     * @return {number}
     */
    move(row, col, player) {
        // stops the game when a winner is found
        if (this.winner) return this.winner

        // update count on row
        if (!this.rows.has(row)) this.rows.set(row, [0,0])
        this.rows.get(row)[player - 1]++

        if (this.rows.get(row)[0] === this.n) {
            this.winner = 1
            return this.winner
        } else if (this.rows.get(row)[1] === this.n) {
            this.winner = 2
            return this.winner
        }

        // update count on col
        if (!this.cols.has(col)) this.cols.set(col, [0,0])
        this.cols.get(col)[player - 1]++

        if (this.cols.get(col)[0] === this.n) {
            this.winner = 1
            return this.winner
        } else if (this.cols.get(col)[1] === this.n) {
            this.winner = 2
            return this.winner
        }

        const isDiag = row === col || row + col === this.n - 1

        // update count on diags
        if (isDiag) {
            if (row === col && row + col === this.n - 1) {
                this.down[player - 1]++
                this.up[player - 1]++
            } else if (row === col) this.down[player - 1]++
            else this.up[player - 1]++
            
            if (this.down[0] === this.n || this.up[0] === this.n) {
                this.winner = 1
                return this.winner
            } else if (this.down[1] === this.n || this.up[1] === this.n) {
                this.winner = 2
                return this.winner
            }
        }

        return 0
    }
}

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row, col, player)
 */
