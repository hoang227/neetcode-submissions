class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s[0] === "0") return 0

        const n = s.length
        const dp = Array(n).fill(1)


        for (let i = 1; i < n; i++) if (s[i] === "0" && (s[i-1] !== "1" && s[i-1] !== "2")) return 0


        for (let i = 1; i < n; i++) {
            const prev = parseFloat(s[i-1])
            const curr = parseFloat(s[i])
            // 11-19 and 21-26

            console.log(prev, curr)
            if ((prev === 1 && curr >= 1) || (prev === 2 && curr >= 1 && curr <= 6)) {
                if (i === 1) dp[i] = 2
                else dp[i] = dp[i-2] + dp[i-1]
            } else if (curr === 0) {
                if (dp[i-1] === 1) dp[i] = dp[i-1]
                else dp[i] = dp[i-2]
            } else {
                dp[i] = dp[i-1]
            }

            console.log(curr, dp)
            console.log("___________")
        }

        return dp.at(-1)
    }
}
