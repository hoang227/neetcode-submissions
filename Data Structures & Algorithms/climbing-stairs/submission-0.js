class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const ways = []

        for (let i = 0; i < n; i++) {
            if (i === 0) ways.push(1)
            else if (i === 1) ways.push(2)
            else ways.push(ways[i-1] + ways[i-2])
        }

        return ways.at(-1)
    }
}
