class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let count = 0
        let minCoin = -1

        const dfs = (i, curr) => {
            if (i >= coins.length) return
            if (curr > amount) return
            if (curr === amount) {
                if (minCoin === -1) minCoin = count
                else minCoin = Math.min(minCoin,count)
                return
            }

            curr += coins[i]
            count++

            dfs(i, curr)

            curr -= coins[i]
            count--

            dfs(i+1, curr)
        }

        dfs(0,0)

        return minCoin
    }
}
