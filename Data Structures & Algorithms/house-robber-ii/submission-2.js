class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0]
        return Math.max(
            this.simulate(nums.slice(0,nums.length-1)),
            this.simulate(nums.slice(1))
        )
    }

    simulate(nums) {
        if (nums.length === 1) return nums[0]

        let prev2 = nums[0]
        let prev1 = nums[0] > nums[1] ? nums[0] : nums[1]

        for (let i = 2; i < nums.length; i++) {
            const curr = Math.max(prev1, prev2 + nums[i])
            prev2 = prev1
            prev1 = curr
        }

        return prev1
    }
}
