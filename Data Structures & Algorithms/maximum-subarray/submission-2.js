class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0]
        let curr = 0

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > curr + nums[i]) curr = nums[i]
            else curr += nums[i]

            max = Math.max(max, curr)
            console.log(i, nums[i], curr)
        }

        return max
    }
}
