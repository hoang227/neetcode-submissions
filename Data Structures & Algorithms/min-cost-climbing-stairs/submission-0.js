class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length
        const dp = Array(n).fill(0)

        for (let i = 2; i <= n; i++) {
            // cost to reach current step = min(last step + cost, last last step + cost)
            dp[i] = Math.min(
                dp[i-1] + cost[i-1],
                dp[i-2] + cost[i-2]
            )
        }

        return dp.at(-1)
    }
}
