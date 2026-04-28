class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = nums[0], currSum = nums[0]

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[i - 1]) currSum = nums[i]
            else currSum += nums[i]
            maxSum = Math.max(maxSum, currSum)
        }

        return maxSum
    }
}
