class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const freq = new Map()

        for (let c of s) {
            if (!freq.has(c)) freq.set(c, 0)
            freq.set(c, freq.get(c) + 1)
        }

        const maxOdd = Math.max(...[...freq.values()].filter(n => n % 2 === 1))
        const minEven = Math.min(...[...freq.values()].filter(n => n % 2 === 0))

        console.log(maxOdd, minEven)

        return maxOdd - minEven
    }
}
