class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let currMin = prices[0]
        let maxProf = 0
        
        for (let p of prices) {
            if (p > currMin) maxProf = Math.max(maxProf, p - currMin)
            else currMin = p
        }

        return maxProf
    }
}
