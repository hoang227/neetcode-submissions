class Leaderboard {
    constructor() {
        this.scores = new Map()
        this.sortedScores = new Map()
    }

    /**
     * @param {number} playerId
     * @param {number} score
     * @return {void}
     */
    addScore(playerId, score) {
        if (!this.scores.has(playerId)) {
            this.scores.set(playerId, score)
            if (!this.sortedScores.has(score)) this.sortedScores.set(score, 1)
            else this.sortedScores.set(score, this.sortedScores.get(score) + 1)
        }
        else {
            const prevScore = this.scores.get(playerId)
            this.sortedScores.set(prevScore, this.sortedScores.get(prevScore) - 1)
            if (this.sortedScores.get(prevScore) === 0) this.sortedScores.delete(prevScore)
            const newScore = this.scores.get(playerId) + score
            this.scores.set(playerId, newScore)
            if (!this.sortedScores.has(newScore)) this.sortedScores.set(newScore, 1)
            else this.sortedScores.set(newScore, this.sortedScores.get(newScore) + 1)
        }
    }

    /**
     * @param {number} K
     * @return {number}
     */
    top(K) {
        const sortedKeys = [...this.sortedScores.keys()].sort((a,b) => b - a)
        
        let sum = 0, count = 0

        for (let i = 0; i < sortedKeys.length; i++) {
            const key = sortedKeys[i]
            const curr = this.sortedScores.get(key)
            if (curr + count <= K) {
                sum += (key * curr)
                count += curr
            } else {
                sum += (K - count) * key
                count = K
            }
            if (count === K) return sum
        }
    }

    /**
     * @param {number} playerId
     * @return {void}
     */
    reset(playerId) {
        const score = this.scores.get(playerId)
        this.sortedScores.set(score, this.sortedScores.get(score) - 1)
        if (this.sortedScores.get(score) === 0) this.sortedScores.delete(score)
        this.scores.delete(playerId)
    }
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId, score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
