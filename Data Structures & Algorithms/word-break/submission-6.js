class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dict = new Set(wordDict)
        const dp = Array(s.length+1).fill(false)

        // empty string is true
        dp[0] = true

        for (let end = 1; end <= s.length; end++) {
            for (let start = 0; start < end; start++) {
                if (dp[start] && dict.has(s.slice(start,end))) {
                    dp[end] = true
                    break
                }
            }
        }

        return dp[s.length]
    }
}
