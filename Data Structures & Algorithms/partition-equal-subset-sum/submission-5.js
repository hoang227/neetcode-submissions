class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */


    canPartition(nums) {
        const sum = nums.reduce((acc, curr) => acc + curr, 0)
        if (sum % 2 === 1) return false

        const target = sum / 2

        const dp = Array(target + 1).fill(false)

        dp[0] = true

        for (let n of nums) {
            for (let j = target; j >= n; j--) {
                dp[j] = dp[j] || dp[j - n]
            }
            console.log(dp)
        }

        return dp[target]
        
    }
}
