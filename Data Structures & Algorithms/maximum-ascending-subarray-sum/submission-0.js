class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = nums[0], currSum = nums[0]

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i]
            const prev = nums[i - 1]

            if (curr <= prev) {
                // reset and update max sum 
                currSum = curr
            } else {
                // add to curr sum
                currSum += curr
            }

            maxSum = Math.max(maxSum, currSum)

            console.log(maxSum, currSum, i)
        }

        return maxSum
    }
}
