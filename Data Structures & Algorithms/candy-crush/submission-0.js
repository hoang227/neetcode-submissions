class Solution {
    /**
     * @param {number[][]} board
     * @return {number[][]}
     */
    getMatches(board) {
        console.log('getting matches')
        let r = 0
        let c = 0
        let toCrush = new Set()
        // search all rows
        while (r < board.length) {
            let count = 1
            let curr = board[r][c]
            while (c < board[0].length - 1) {
                c++
                if (curr === board[r][c] && curr !== 0) {
                    count++
                    if (count === 3) {
                        toCrush.add(`${r},${c-2}`)
                        toCrush.add(`${r},${c-1}`)
                        toCrush.add(`${r},${c}`)
                    } else if (count > 3) {
                        toCrush.add(`${r},${c}`)
                    }
                } else {
                    count = 1
                    curr = board[r][c]
                }
            }
            r++
            c = 0
        }

        r = 0
        c = 0

        // search all columns
        while (c < board[0].length) {
            let count = 1
            let curr = board[r][c]
            while (r < board.length - 1) {
                r++
                if (curr === board[r][c] && curr !== 0) {
                    count++
                    if (count === 3) {
                        toCrush.add(`${r-2},${c}`)
                        toCrush.add(`${r-1},${c}`)
                        toCrush.add(`${r},${c}`)
                    } else if (count > 3) {
                        toCrush.add(`${r},${c}`)
                    }
                } else {
                    count = 1
                    curr = board[r][c]
                }
            }
            c++
            r = 0
        }

        return toCrush
    }

    crush(board, matches) {
        console.log('crushing')
        for (let m of [...matches]) {
            let r = m.split(',')[0]
            let c = m.split(',')[1]
            board[r][c] = 0
        }
        return board
    }

    drop(board) {
        console.log('dropping')
        let r = 0
        let c = 0
        // search all columns
        const res = []
        while (c < board[0].length) {
            let newCol = []
            while (r < board.length) {
                if (board[r][c] !== 0) newCol.push(board[r][c])    
                r++
            }
            res.push([...Array(board.length - newCol.length).fill(0), ...newCol])
            newCol = []
            c++
            r = 0
        }

        const flip = Array.from({length: res[0].length}, (_, i) => {
            return Array.from({length: res.length}, (_, j) => {
                return res[j][i]
            })
        })
        console.log(flip)
        return flip
    }

    candyCrush(board) {
        while (this.getMatches(board).size > 0) {
            const toCrush = this.getMatches(board)
            board = this.crush(board, toCrush)
            board = this.drop(board)
        }
        return board
    }
}
