class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = prices[0]
        prices[0] = 0

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > lowest) {
                let temp = prices[i]
                prices[i] = prices[i - 1] + (prices[i] - lowest)
                lowest = temp
            } else {
                lowest = Math.min(lowest, prices[i])
                prices[i] = prices[i - 1]
            }
            console.log(prices)
        }

        return prices.at(-1)
    }
}
