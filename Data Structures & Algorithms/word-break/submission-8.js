class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dict = new Set(wordDict)
        const n = s.length
        const dp = Array(n+1).fill(false)

        // empty string is true
        dp[0] = true

        for (let end = 1; end <= n; end++) {
            for (let start = 0; start < end; start++) {
                // console.log(s.slice(start,end), dp.map(n => n ? "1" : "0").join(''))
                if (dp[start] && dict.has(s.slice(start,end))) {
                    dp[end] = true
                    break
                }
            }
        }

        return dp[n]
    }
}
