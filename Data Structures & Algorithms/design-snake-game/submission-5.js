class SnakeGame {
    /**
     * @param {number} width
     * @param {number} height
     * @param {number[][]} food
     */
    constructor(width, height, food) {
        this.gameOver = false
        this.w = width
        this.h = height
        this.score = 0
        this.food = food.values()
        this.currFood = this.food.next()
        this.snake = {0 : [0,0]}
        this.head = 0
        this.tail = 0
        this.body = new Set()
        this.moves = { 'R': [0,1], 'L': [0,-1], 'U': [-1,0], 'D': [1,0] }
    }

    moveHead(direction) {
        const newTile = [...this.snake[this.head]]
        newTile[0] += this.moves[direction][0]
        newTile[1] += this.moves[direction][1]

        if (!this.isValid(newTile)) {
            this.gameOver = true
            return null
        }

        this.snake[--this.head] = newTile
        this.body.add(`${newTile[0]},${newTile[1]}`)
        return this.snake[this.head]
    }

    popTail() {
        delete this.snake[this.tail--]
        const tail = this.snake[this.tail]
        this.body.delete(`${tail[0]},${tail[1]}`)
        return tail
    }

    isValid(tile) {
        return !(tile[0] < 0 || tile[0] === this.h || tile[1] < 0 || tile[1] === this.w || this.body.has(`${tile[0]},${tile[1]}`))
    }

    /**
     * @param {string} direction
     * @return {number}
     */
    move(direction) {
        if (this.gameOver) return -1

        const newHead = this.moveHead(direction)
        if (!newHead) return -1
        if (!this.currFood.done) {
            if (!(newHead[0] === this.currFood.value[0] && newHead[1] === this.currFood.value[1])) {
                this.popTail()
            } else {
                this.score++
                this.currFood = this.food.next()
            }
        }
        
        return this.score
    }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */
