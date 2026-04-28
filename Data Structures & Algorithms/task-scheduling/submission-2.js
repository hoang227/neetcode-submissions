class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = Array(26).fill(0)
        const A = 'A'.charCodeAt(0)

        for (let t of tasks) count[t.charCodeAt(0) - A]++

        const maxFreq = Math.max(...count)
        let maxCount = 0

        for (let c of count) if (c === maxFreq) maxCount++

        const partCount = maxFreq - 1
        const partLength = n + 1
        const emptySlots = partCount * partLength + maxCount

        return Math.max(tasks.length, emptySlots)
    }
}
